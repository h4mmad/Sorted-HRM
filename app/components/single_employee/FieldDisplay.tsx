import { inputStyle } from "@/app/helperFns/styles";
import classNames from "classnames";

export default function FieldDisplay({
  fieldValue,
  labelValue,
}: {
  fieldValue: string | undefined;
  labelValue: string;
}) {
  return (
    <div>
      <label className="block">{labelValue}</label>
      <input
        disabled
        value={fieldValue}
        className={classNames([inputStyle, "cursor-not-allowed"])}
      />
    </div>
  );
}
