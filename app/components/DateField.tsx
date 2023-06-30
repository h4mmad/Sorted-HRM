export const DateField = ({ disabled, labelText }: any) => {
  return (
    <div className="flex flex-col mt-2 lg:mt-0">
      <label className="text-gray-500 block text-sm">{labelText}: </label>
      <input
        className={
          "border rounded-md p-1 w-fit " +
          (disabled ? "cursor-not-allowed" : "cursor-text border")
        }
        type="date"
        disabled={disabled}
      />
    </div>
  );
};
