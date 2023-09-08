import classNames from "classnames";

export default function getActiveOrInactiveTag(
  status: "active" | "inactive" | undefined
) {
  return (
    <p
      className={classNames([
        "px-4 py-2 w-fit rounded-full",
        {
          "text-red-500": status === "inactive",
        },
        {
          " text-green-500": status === "active",
        },
      ])}
    >
      {status}
    </p>
  );
}
