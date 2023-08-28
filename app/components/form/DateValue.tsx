import { inputStyle } from "@/app/helperFns/styles";
import { DateTime } from "luxon";

export default function DateValue({
  dateValue,
  labelValue,
}: {
  labelValue: string;
  dateValue: Date;
}) {
  return (
    <div>
      <label className="block">{labelValue}</label>
      <input
        disabled
        value={DateTime.fromJSDate(dateValue).toFormat("dd LLLL, yyyy")}
        className="p-2 border border-gray-200 rounded-md text-myDarkBlue cursor-not-allowed"
      />
    </div>
  );
}
