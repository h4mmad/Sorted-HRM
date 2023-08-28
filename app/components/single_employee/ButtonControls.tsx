import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import classNames from "classnames";
import { useState } from "react";
import { DividerLine } from "../other/DividerLine";
import { useEmployeeContext } from "@/app/context/EmployeeContext";
export default function ButtonControls() {
  const [isOpen, setIsOpen] = useState(false);
  const { isEditing, setIsEditing, employeeMethods, imageUrl } =
    useEmployeeContext();
  const { formState, control, reset } = employeeMethods;

  return (
    <div className="flex flex-row space-x-4 justify-end">
      {isEditing ? (
        <>
          {formState.isDirty || imageUrl ? (
            <button
              type="submit"
              className="text-green-600 rounded-md p-2 hover:bg-green-100 border border-green-600"
            >
              Save changes
            </button>
          ) : (
            ""
          )}

          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
              reset();
            }}
            className="text-red-500 rounded-md p-2 bg-red-100 border border-red-500"
          >
            Cancel
          </button>
        </>
      ) : (
        ""
      )}

      <div className="relative">
        {!isEditing ? (
          <button
            type="button"
            className={classNames([
              "rounded-full p-2 flex justify-center items-center border bg-white shadow-sm",
              { "border-myDarkBlue": isOpen },
            ])}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MoreHorizIcon className="text-myDarkBlue" />
          </button>
        ) : (
          ""
        )}
        {isOpen && (
          <div className="rounded-md p-2 bg-white w-64 text-base break-normal absolute right-0 mt-1 border shadow-lg border-slate-300">
            <button
              type="button"
              onClick={() => {
                setIsEditing(true);
                setIsOpen(false);
              }}
              className="p-2 rounded-md hover:bg-gray-100 text-myDarkBlue w-full"
            >
              Edit employee
            </button>
            <DividerLine />
            <button
              type="button"
              className="p-2 rounded-md hover:bg-red-100 hover:text-red-500 text-gray-400 w-full mt-2"
            >
              Delete employee
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
