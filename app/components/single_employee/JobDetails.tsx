import { useEmployeeContext } from "@/app/context/EmployeeContext";
import DesignationInput from "../form/DesignationInput";
import JobDepartmentSelector from "../form/JobDepartmentSelector";
import FieldDisplay from "./FieldDisplay";
import WorkStatusSelector from "../form/WorkStatusSelector";
import DateValue from "../form/DateValue";

export default function JobDetails() {
  const { data, employeeMethods, isEditing } = useEmployeeContext();
  const { formState, register } = employeeMethods;

  return (
    <section className="flex-1">
      <h2 className="text-2xl  text-myDarkBlue">Job</h2>

      <div className="flex flex-col space-y-8 rounded-lg border border-slate-300 bg-white shadow-md h-fit p-8">
        <div className="flex justify-between">
          <div>
            {data?.job.dateOfJoining && (
              <DateValue
                dateValue={new Date(data?.job.dateOfJoining)}
                labelValue="Date of joining"
              />
            )}
          </div>
          <div>
            {isEditing ? (
              <DesignationInput
                register={register}
                formState={formState}
                defaultValue={data?.job.designation}
              />
            ) : (
              <FieldDisplay
                fieldValue={data?.job.designation}
                labelValue="Designation"
              />
            )}
          </div>
          <div>
            {isEditing ? (
              <JobDepartmentSelector
                register={register}
                formState={formState}
                defaultValue={data?.job.department}
              />
            ) : (
              <FieldDisplay
                fieldValue={data?.job?.department}
                labelValue="Department"
              />
            )}
          </div>
        </div>

        <div>
          {isEditing ? (
            <WorkStatusSelector
              formState={formState}
              register={register}
              defaultValue={data?.job.workStatus}
            />
          ) : (
            <FieldDisplay
              fieldValue={data?.job.workStatus}
              labelValue="Work status"
            />
          )}
        </div>
      </div>
    </section>
  );
}
