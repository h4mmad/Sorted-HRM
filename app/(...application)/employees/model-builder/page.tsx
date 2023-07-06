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
    SectionType[],
    AxiosError
  >({
    queryKey: ["employee-model"],
    queryFn: getSections,
  });

  return (
    <div className="w-3/4 relative">
      <div className="flex flex-row space-x-8 mt-4">
        <div className="sticky top-0 h-fit">
          <div className="p-3 border border-gray-200 rounded-md mb-4">
            <button
              className="text-myLightBlue hover:underline"
              onClick={() => {}}
            ></button>

            <button className="text-myLightBlue float-right hover:underline">
              Save model
            </button>
          </div>
          <AddSectionForm />
        </div>

        <div className="flex-grow">
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
