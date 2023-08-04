"use client";

import React from "react";
import { v4 } from "uuid";
import { useQuery } from "@tanstack/react-query";
import AddSectionForm from "@/app/components/AddSectionForm";
import { getSections } from "@/app/clientApiFns/employeeModelApi";
import LoadingSkeleton from "@/app/components/LoadingSekeleton";
import NoSections from "@/app/components/NoSections";
import { AxiosError } from "axios";
import SectionErrorMessage from "@/app/components/SectionErrorMessage";
import DynamicSection from "../../../components/DynamicSection";

export default function ModelBuilder() {
  const { data, isSuccess, isLoading, isError, error } = useQuery<
    Section[],
    AxiosError
  >({
    queryKey: ["employee-model"],
    queryFn: getSections,
  });

  return (
    <div>
      <div className="flex flex-row space-x-16 my-8">
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
                  ({ sectionId, sectionFields, sectionName }: Section) => {
                    return (
                      <DynamicSection
                        key={v4()}
                        sectionId={sectionId}
                        sectionName={sectionName}
                        sectionFields={sectionFields}
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
