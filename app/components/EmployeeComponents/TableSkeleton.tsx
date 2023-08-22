export const TableSkeleton = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="h-12 w-1/2 rounded-md bg-gray-200 animate-pulse" />
      <div className="h-12 w-full rounded-md bg-gray-300 animate-pulse" />
      <div className="h-12 w-full rounded-md bg-gray-200 animate-pulse" />
      <div className="h-12 w-full rounded-md bg-gray-300 animate-pulse" />
      <div className="h-12 w-full rounded-md bg-gray-200 animate-pulse" />
      <div className="h-12 w-full rounded-md bg-gray-300 animate-pulse" />
      <div className="h-12 w-full rounded-md bg-gray-200 animate-pulse" />
    </div>
  );
};
