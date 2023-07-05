export default function LoadingSkeleton() {
  return (
    <div className="p-3 rounded-lg bg-gray-200 animate-pulse mb-4">
      <div className="rounded-full bg-gray-400  w-32 h-6 animate-pulse" />

      <div className="flex flex-row my-8 justify-between">
        <div className="flex-col space-y-2 ">
          <div className="bg-gray-400 rounded-full   w-12 h-6 animate-pulse  " />
          <div className="bg-gray-400  rounded-full  w-64 h-8 animate-pulse  " />
        </div>
        <div className="flex-col space-y-2">
          <div className="bg-gray-400 rounded-full w-12 h-6 animate-pulse  " />
          <div className="bg-gray-400  rounded-full  w-64 h-8 animate-pulse  " />
        </div>
      </div>

      <div className="bg-gray-500  rounded-full w-12 h-6 animate-pulse  " />
    </div>
  );
}
