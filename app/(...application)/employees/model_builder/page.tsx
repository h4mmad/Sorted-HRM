"use client";

import React, { useState } from "react";
import { v4 } from "uuid";
import { useQuery } from "@tanstack/react-query";
import AddSectionForm from "@/app/components/model_builder_components/AddSectionForm";
import { getSections } from "@/app/clientApiFns/modelApi";
import LoadingSkeleton from "@/app/components/employee_components/LoadingSekeleton";
import NoSections from "@/app/components/model_builder_components/NoSections";
import { AxiosError } from "axios";
import SectionErrorMessage from "@/app/components/model_builder_components/SectionErrorMessage";
import DynamicSection from "@/app/components/model_builder_components/DynamicSection";
import { getCamelCase } from "@/app/helperFns/fns";

export default function ModelBuilder() {
  const { data, isSuccess, isLoading, isError, error } = useQuery<
    Section[],
    AxiosError
  >({
    queryKey: ["employee-model"],
    queryFn: getSections,
  });

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="flex flex-col space-y-8">
        <h1 className="text-3xl text-myDarkBlue">Employee model builder</h1>
        <div className="relative">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-myLightBlue"
          >
            {toggle ? "Cancel" : "+ Add section"}
          </button>
          {toggle && (
            <div className="absolute z-10">
              <AddSectionForm />
            </div>
          )}
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
                        sectionJsonName={getCamelCase(sectionName)}
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
