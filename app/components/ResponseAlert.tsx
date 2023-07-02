import classNames from "classnames";

export default function ResponseAlert({ statusCode, message }: ResponseAlert) {
  return (
    <div
      className={classNames([
        "p-3 rounded-md  absolute w-full",
        { "bg-green-400": statusCode.startsWith("20") },
        { "bg-red-400": statusCode.startsWith("50") },
        { "bg-yellow-400": statusCode.startsWith("30" || "40") },
      ])}
    >
      <p className="text-lg font-bold">
        {statusCode}:{message}
      </p>
    </div>
  );
}
