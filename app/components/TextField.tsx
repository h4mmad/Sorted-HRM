export const TextField = ({ labelText, defaultValue, disabled }: any) => {
  return (
    <div className="mt-2 lg:mt-0">
      <label className="text-gray-500 block text-sm">{labelText} </label>
      <input
        disabled={disabled}
        className={
          "border rounded-md p-1 " +
          (disabled ? "cursor-not-allowed" : "cursor-text border")
        }
        defaultValue={defaultValue}
      />
    </div>
  );
};
