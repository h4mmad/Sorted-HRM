"use client";

import React, { useEffect, useReducer } from "react";
import Section from "./Section";
import classNames from "classnames";
import { formBuilderReducer } from "@/app/reducers/formBuilderReducer";
import ResponseAlert from "@/app/components/ResponseAlert";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AddSectionForm from "@/app/components/AddSectionForm";

export default function MasterRecord() {
  const [state, dispatch] = useReducer(formBuilderReducer, {
    layouts: [],
    inputFieldType: "",
    inputField: "",
    toggleForm: false,
    disabled: true,
    loading: true,
    server: { message: "", status: "" },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await fetch("http://localhost:3000/api/employee-model")
        ).json();
        dispatch({ type: "SET_LAYOUTS", payload: data });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["model"],
    queryFn: async () => {
      const data: SectionType[] = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/employee-model`
      );
      console.log("data from react query", data);

      return data;
    },
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "SET_SERVER_MESSAGE",
        payload: { message: "", status: "" },
      });
    }, 5000);
  }, [state.server]);

  async function saveLayout() {
    try {
      const response = await fetch(`http://localhost:3000/api/employee-model`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ layouts: state.layouts }),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error(`Error status: ${response.status}`);
      }
      dispatch({
        type: "SET_SERVER_MESSAGE",
        payload: {
          message: response.statusText,
          status: String(response.status),
        },
      });
      dispatch({ type: "TOGGLE_EDIT" });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-3/4 relative">
      {state.server.status && (
        <ResponseAlert
          message={state.server.message}
          statusCode={state.server.message}
        />
      )}

      <div className="flex flex-row space-x-8 mt-4">
        <div className="sticky top-0 h-fit">
          <div className="p-3 border border-gray-200 rounded-md mb-4">
            <button
              className="text-myLightBlue hover:underline"
              onClick={() => dispatch({ type: "TOGGLE_EDIT" })}
            >
              {state.disabled ? "Edit model" : "Cancel"}
            </button>

            {!state.disabled && (
              <button
                className="text-myLightBlue float-right hover:underline"
                onClick={saveLayout}
              >
                Save model
              </button>
            )}
          </div>
          <AddSectionForm />
        </div>

        <div
          className={classNames([
            "flex-grow",
            {
              "opacity-40 disabled select-none pointer-events-none":
                state.disabled,
            },
          ])}
        >
          {state?.layouts?.map(({ sectionID, sectionName, fields }, index) => {
            return (
              <>
                <Section
                  key={sectionID}
                  sectionID={sectionID}
                  sectionName={sectionName}
                  fields={fields}
                  dispatch={dispatch}
                  disabled={state.disabled}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
