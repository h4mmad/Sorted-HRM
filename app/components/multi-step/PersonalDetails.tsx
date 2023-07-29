import { useFormContext } from "@/app/context/FormContext";

export default function PersonalDetails() {
  const { methods } = useFormContext();

  return (
    <section className="p-4 rounded-md">
      <h1>Personal details</h1>
      <div className="flex flex-row">
        <label>Name</label>
        <input {...methods?.register("Name")} />
      </div>
    </section>
  );
}
