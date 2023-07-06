import {
  useFieldArray,
  Control,
  UseFormRegister,
  FieldErrors,
  useForm,
} from "react-hook-form";
import { Inputs } from "./AddFieldForm";
// work on this after internet

type Options = {
  options: { optionName: string }[];
};

export default function OptionsMenu() {
  const {
    register,
    control,
    formState: { errors, isSubmitting, isLoading },
  } = useForm();
  const { append, remove } = useFieldArray();

  return (
    <div className="mb-4 relative">
      <div className="ml-6">
        <p className=" font-bold text-myDarkBlue select-none ">Add an option</p>
      </div>
    </div>
  );
}
