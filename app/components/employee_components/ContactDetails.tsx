import { useEmployeeContext } from "@/app/context/EmployeeContext";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import classNames from "classnames";

export default function ContactDetails() {
  const { employeeMethods, isEditing, data } = useEmployeeContext();
  const { register, formState } = employeeMethods;
  return (
    <section className="flex-1">
      <h2 className="text-2xl  text-myDarkBlue">Contact</h2>

      <div className="flex flex-col bg-white space-y-6 rounded-lg border border-slate-300 shadow-md h-fit p-6">
        <div>
          <label className="block text-gray-500">Phone number</label>
          <div className="flex space-x-4 items-center">
            <input
              type="number"
              disabled={!isEditing}
              {...register("contact.phoneNumber", {
                value: Number(data?.contact.phoneNumber),
                required: "Phone number is required",

                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "10 digit phone number is required",
                },
              })}
              className={classNames([
                "p-2 border border-gray-200 rounded-md text-myDarkBlue",
                {
                  "bg-green-100":
                    !formState.errors.contact?.phoneNumber && isEditing,
                },

                {
                  "bg-yellow-200":
                    formState.errors.contact?.phoneNumber && isEditing,
                },
              ])}
            />

            {isEditing && formState.errors.contact?.phoneNumber && (
              <EditIcon className="text-yellow-500" />
            )}

            {isEditing && !formState.errors.contact?.phoneNumber && (
              <DoneIcon className="text-green-500" />
            )}
          </div>

          <p className="text-red-500">
            {formState.errors.contact?.phoneNumber}
          </p>
        </div>

        <div>
          <label className="block text-gray-500">Email</label>

          <div className="flex space-x-4 items-center">
            <input
              disabled={!isEditing}
              {...register("contact.email", {
                required: "Email is required",
                value: data?.contact.email,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={classNames([
                "p-2 border border-gray-200 rounded-md text-myDarkBlue",
                {
                  "bg-green-100": !formState.errors.contact?.email && isEditing,
                },

                {
                  "bg-yellow-200": formState.errors.contact?.email && isEditing,
                },
              ])}
            />
            {isEditing && formState.errors.contact?.email && (
              <EditIcon className="text-yellow-500" />
            )}

            {isEditing && !formState.errors.contact?.email && (
              <DoneIcon className="text-green-500" />
            )}
          </div>

          <p className="text-red-500">{formState.errors.contact?.email}</p>
        </div>
      </div>
    </section>
  );
}
