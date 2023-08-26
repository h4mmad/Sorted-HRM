import classNames from "classnames";

export default function getExpiredOrActiveTag(
  status: "active" | "expired" | undefined
) {
  return (
    <p
      className={classNames([
        "px-4 py-2 w-fit rounded-full",
        {
          "bg-red-100 text-red-500": status === "expired",
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
