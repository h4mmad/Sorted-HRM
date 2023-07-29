import { useFormContext } from "@/app/context/FormContext";

export default function FormButtonControls() {
  const { goToNextStep, goToPreviousStep, step, length } = useFormContext();

  return (
    <div className="flex flex-row justify-between">
      {step > 0 && (
        <button
          onClick={goToPreviousStep}
          className="p-2 bg-myLightBlue hover:bg-myDarkBlue text-white font-semibold rounded-md"
        >
          Previous
        </button>
      )}
      {step !== length - 1 ? (
        <button
          onClick={goToNextStep}
          className="ml-auto p-2 bg-myLightBlue hover:bg-myDarkBlue text-white font-semibold rounded-md"
        >
          Next
        </button>
      ) : (
        <button
          type="submit"
          className="p-2 rounded-md border border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
        >
          Submit
        </button>
      )}
    </div>
  );
}
