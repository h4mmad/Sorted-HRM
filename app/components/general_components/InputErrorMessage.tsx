export default function InputErrorMessage({
  message,
}: {
  message: string | undefined;
}) {
  return <p className="text-red-500">{message}</p>;
}
