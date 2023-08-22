const EmployeeSkeleton = () => {
  return (
    <div className="flex flex-col space-y-4">
      {/* profile section */}
      <div className="flex flex-row space-x-8 mt-4">
        <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse" />

        <div className="rounded-lg bg-gray-300 p-4 grow animate-pulse" />

        <div className="rounded-lg bg-gray-200 p-4 grow animate-pulse">
          <h2 className="text-xl font-semibold"></h2>
        </div>
      </div>

      {/* form */}
      {/* Personal details */}
      <div className="flex flex-col space-y-8">
        <section className="p-4">
          <h2 className="text-xl font-medium text-myDarkBlue"></h2>
          <div className="rounded-md  bg-gray-300 animate-pulse h-32"></div>
        </section>
        <section className="p-4">
          <h2 className="text-xl font-medium text-myDarkBlue"></h2>
          <div className="rounded-md  bg-gray-200 animate-pulse h-32"></div>
        </section>
        <section className="p-4">
          <h2 className="text-xl font-medium text-myDarkBlue"></h2>
          <div className="rounded-md bg-gray-300 animate-pulse h-32"></div>
        </section>
      </div>
    </div>
  );
};

export default EmployeeSkeleton;
