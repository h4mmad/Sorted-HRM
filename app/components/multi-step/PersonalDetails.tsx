import { useFormContext } from "@/app/context/FormContext";

export default function PersonalDetails() {
  const { methods } = useFormContext();

  return (
    <section className="p-4 rounded-md">
      <div className="flex flex-row">
        <label>Name</label>
        <input {...methods?.register("Name")} />
      </div>
    </section>
  );
}
