import { useEmployeeContext } from "@/app/context/EmployeeContext";
import {
  isDateExpired,
  validateExpiryDate,
} from "@/app/helperFns/dateHelperFns";
import getExpiredOrActiveTag from "@/app/helperFns/getExpiredOrActiveTag";
import { Controller } from "react-hook-form";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import classNames from "classnames";
import { useState } from "react";

export default function IqamaDetails() {
  const { isEditing, setIsEditing, employeeMethods, data } =
    useEmployeeContext();
  const { register, formState, control, setError, clearErrors } =
    employeeMethods;

  return (
    <section className="flex-1">
      <h2 className="text-2xl  text-myDarkBlue">Iqama</h2>

      <div className="flex flex-col space-y-6 rounded-lg border border-gray-100 shadow-md bg-white h-fit p-6">
        <div>
          <label className="block text-gray-500">Iqama number</label>
          <input
            disabled
            value={data?.iqama.iqamaNumber}
            className="p-2 border cursor-not-allowed border-gray-200 rounded-md text-myDarkBlue"
          />
        </div>

        <div>
          <label className="block text-gray-500">Iqama expiry date</label>

          <div className="flex space-x-4 items-center">
            <Controller
              name="iqama.iqamaExpiry"
              control={control}
              rules={{
                required: "Expiry date is required",
                validate: (value) =>
                  validateExpiryDate(
                    value,
                    "Iqama expiry date should be in the future"
                  ),
              }}
              defaultValue={new Date(String(data?.iqama.iqamaExpiry))}
              render={({ field }) => (
                <DatePicker
                  disabled={!isEditing}
                  className={classNames([
                    "p-2 border border-gray-200 rounded-md text-myDarkBlue",
                  ])}
                  dateFormat="dd MMMM, yyyy"
                  selected={field.value}
                  onChange={(date) => {
                    field.onChange(date);

                    if (date) {
                      const currentDate = new Date();

                      if (date < currentDate) {
                        setError("iqama.iqamaExpiry", {
                          type: "validate",
                          message: "Iqama expiry date should be in the future",
                        });
                        console.log(formState.errors.iqama?.iqamaExpiry?.type);
                      } else {
                        clearErrors("iqama.iqamaExpiry");
                      }
                    }
                  }}
                />
              )}
            />

            {isEditing && formState.errors.iqama?.iqamaExpiry && (
              <EditIcon className="text-yellow-500" />
            )}
          </div>

          {formState.errors.iqama?.iqamaExpiry && (
            <p className="text-red-500">
              {formState.errors.iqama?.iqamaExpiry?.message}
            </p>
          )}
        </div>

        {!isEditing && getExpiredOrActiveTag(data?.iqama.iqamaStatus)}
      </div>
    </section>
  );
}
