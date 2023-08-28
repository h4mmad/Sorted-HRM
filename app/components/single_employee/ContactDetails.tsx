import { useEmployeeContext } from "@/app/context/EmployeeContext";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import classNames from "classnames";
import FieldDisplay from "./FieldDisplay";
import PhoneNumberInput from "../form/PhoneNumberInput";
import EmailInput from "../form/EmailInput";

export default function ContactDetails() {
  const { employeeMethods, isEditing, data } = useEmployeeContext();
  const { register, formState } = employeeMethods;
  return (
    <section className="flex-1">
      <h2 className="text-2xl  text-myDarkBlue">Contact</h2>

      <div className="flex flex-col bg-white space-y-6 rounded-lg border border-slate-300 shadow-md h-fit p-6">
        <div>
          {isEditing ? (
            <PhoneNumberInput
              formState={formState}
              register={register}
              defaultValue={data?.contact.phoneNumber}
            />
          ) : (
            <FieldDisplay
              fieldValue={data?.contact.phoneNumber}
              labelValue="Phone number"
            />
          )}
        </div>

        <div>
          {isEditing ? (
            <EmailInput
              formState={formState}
              register={register}
              defaultValue={data?.contact.email}
            />
          ) : (
            <FieldDisplay fieldValue={data?.contact.email} labelValue="Email" />
          )}
        </div>
      </div>
    </section>
  );
}
