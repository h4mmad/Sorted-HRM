"use client";

import React, { useEffect, useReducer } from "react";
import Section from "../../../components/Section";
import classNames from "classnames";
import ResponseAlert from "@/app/components/ResponseAlert";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AddSectionForm from "@/app/components/AddSectionForm";
import {
  addSection,
  deleteSection,
  getSections,
} from "@/app/clientApiFns/employeeModelApi";

export default function ModelBuilder() {
  const queryClient = useQueryClient();

  const { data, isSuccess } = useQuery({
    queryKey: ["employee-model"],
    queryFn: getSections,
  });

  const deleteSectionMutation = useMutation(deleteSection, {
    onSuccess: () => {
      queryClient.invalidateQueries(["employee-model"]);
    },
  });

  const handleSectionDelete = (id: string) => {
    deleteSectionMutation.mutate(id);
  };

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

        <div className={classNames(["flex-grow", ,])}>
          {data?.map(({ sectionId, sectionName, sectionFields }) => {
            return (
              <Section
                key={sectionId}
                sectionId={sectionId}
                sectionName={sectionName}
                sectionFields={sectionFields}
                handleSectionDelete={handleSectionDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
