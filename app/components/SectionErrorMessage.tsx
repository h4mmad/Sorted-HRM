export default function SectionErrorMessage({
  errorMessage,
}: {
  errorMessage: string;
}) {
  return (
    <div className="p-3 rounded-lg bg-gray-200 first-letter:mb-4 flex items-center justify-center">
      <p className="text-red-500 font-bold">{errorMessage}</p>
    </div>
  );
}
