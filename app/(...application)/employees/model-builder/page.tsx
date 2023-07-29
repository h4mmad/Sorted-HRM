"use client";

import React from "react";
import { v4 } from "uuid";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import AddSectionForm from "@/app/components/AddSectionForm";
import { getSections } from "@/app/clientApiFns/employeeModelApi";
import LoadingSkeleton from "@/app/components/LoadingSekeleton";
import NoSections from "@/app/components/NoSections";
import { AxiosError } from "axios";
import SectionErrorMessage from "@/app/components/SectionErrorMessage";
import DynamicSection from "../../../components/DynamicSection";
import { deleteSection } from "@/app/clientApiFns/employeeModelApi";

export default function ModelBuilder() {
  const queryClient = useQueryClient();

  const { data, isSuccess, isLoading, isError, error } = useQuery<
    SectionType[],
    AxiosError
  >({
    queryKey: ["employee-model"],
    queryFn: getSections,
  });
  const deleteSectionMutation = useMutation(deleteSection, {
    onSuccess: () => {
      queryClient.invalidateQueries(["employee-model"]);
    },
  });

  return (
    <div>
      <div className="flex flex-row space-x-8 my-8">
        <div className="sticky top-0 h-fit">
          <AddSectionForm />
        </div>

        <div className="flex-1">
          {isError && <SectionErrorMessage errorMessage={error.message} />}
          {isSuccess && data.length === 0 && <NoSections />}
          {
            <>
              {isLoading ? (
                <div>
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                </div>
              ) : (
                isSuccess &&
                data.length != 0 &&
                data?.map(
                  ({ _id, sectionFields, sectionName }: SectionType) => {
                    return (
                      <DynamicSection
                        key={v4()}
                        _id={_id}
                        sectionName={sectionName}
                        sectionFields={sectionFields}
                        deleteSectionMutation={deleteSectionMutation}
                      />
                    );
                  }
                )
              )}
            </>
          }
        </div>
      </div>
    </div>
  );
}
