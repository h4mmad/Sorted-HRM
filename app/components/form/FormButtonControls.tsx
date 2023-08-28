import { useFormContext } from "@/app/context/FormContext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function FormButtonControls() {
  const { goToNextStep, goToPreviousStep, step, length, methods } =
    useFormContext();
  const {
    formState: { isSubmitting, isSubmitted, isSubmitSuccessful },
  } = methods;
  console.log(isSubmitting);

  return (
    <div className="flex flex-row space-x-2 justify-between">
      <div>
        <h2 className="text-3xl font-semibold text-myDarkBlue dark:text-white select-none "></h2>
        <p className="mt-2">
          Step {step + 1} of {length}
        </p>
      </div>

      <div className="flex space-x-3 ">
        {step > 0 && (
          <button
            onClick={goToPreviousStep}
            className="p-2 flex space-x-4  hover:bg-myLightBlue hover:text-white  text-myLightBlue border border-myLightBlue  rounded-md h-fit"
          >
            <ArrowBackIcon />

            <p>Previous</p>
          </button>
        )}
        {step !== length - 1 ? (
          <button
            type="submit"
            className="p-2 flex space-x-4  hover:bg-myLightBlue hover:text-white  text-myLightBlue border border-myLightBlue  rounded-md h-fit"
          >
            <p>Next</p>
            <ArrowForwardIcon />
          </button>
        ) : (
          <button
            disabled={isSubmitting}
            type="submit"
            className="px-4 py-2 rounded-md border border-green-700 text-green-700 hover:bg-green-700 hover:text-white h-fit"
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        )}
      </div>
    </div>
  );
}
