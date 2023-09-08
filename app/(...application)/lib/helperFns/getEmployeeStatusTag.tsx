import classNames from "classnames";

export default function getEmployeeStatusTag(
  status: "active" | "inactive" | undefined
) {
  return (
    <p
      className={classNames([
        "px-4 py-2 w-fit rounded-full",
        {
          "bg-red-100 text-red-500": status === "inactive",
        },
        {
          "bg-green-100 text-green-500": status === "active",
        },
      ])}
    >
      {status}
    </p>
  );
}
