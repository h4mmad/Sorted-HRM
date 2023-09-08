import {
  getAge,
  getDaysToExpiry,
} from "@/app/(...application)/lib/helperFns/dateHelperFns";
import { DateTime } from "luxon";
import EmployeeImage from "./EmployeeImage";
import { useState } from "react";
import { useEmployeeContext } from "@/app/context/EmployeeContext";
export default function EmployeeOverviewCard() {
  const { data } = useEmployeeContext();
  return (
    <div className="flex flex-row space-x-8 mt-4">
      {/* Personal info */}
      <div className="rounded-lg bg-white p-4  border border-slate-300 shadow-md">
        <div className="flex flex-row space-x-8 p-2">
          <div>
            <EmployeeImage />
          </div>

          <div className="flex flex-col space-y-3">
            <p className="text-myDarkBlue text-3xl ">
              {data?.personal.fullName}
            </p>
            <p className="text-myDarkBlue">{data?.job.designation}</p>
            <div>
              <p className="text-gray-500">
                {data?.personal.dateOfBirth &&
                  getAge(
                    DateTime.fromJSDate(new Date(data?.personal.dateOfBirth))
                  )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Iqama info */}
      <div className="rounded-lg bg-white p-4 grow border border-slate-300 shadow-md flex-col space-y-4">
        <div>
          <div>
            <p className="text-gray-500">Iqama number</p>
            <p className="text-myDarkBlue text-xl font-medium mb-2">
              {data?.iqama.iqamaNumber}
            </p>
          </div>
        </div>

        <div>
          <p className="text-gray-500">Days to expiry</p>
          <p className="text-myDarkBlue">
            {data?.iqama.iqamaExpiry &&
              getDaysToExpiry(
                DateTime.fromJSDate(new Date(data?.iqama.iqamaExpiry))
              )}
          </p>
        </div>
        <div>
          <p className="text-gray-500">Expires on</p>
          <p className="text-myDarkBlue">
            {data?.iqama.iqamaExpiry &&
              DateTime.fromJSDate(new Date(data?.iqama.iqamaExpiry)).toFormat(
                "dd LLLL, yyyy"
              )}
          </p>
        </div>
      </div>
    </div>
  );
}
