import classNames from "classnames";
export default function getMaleOrFemaleTag(
  gender: "male" | "female" | undefined
) {
  return (
    <p
      className={classNames([
        "px-4 py-2 w-fit rounded-full",
        {
          "bg-blue-100 text-blue-500": gender?.toLowerCase() === "male",
        },
        {
          "bg-pink-100 text-pink-500": gender?.toLowerCase() === "female",
        },
      ])}
    >
      {gender}
    </p>
  );
}
