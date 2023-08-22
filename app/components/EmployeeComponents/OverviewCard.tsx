export default function EmployeeOverviewCard({ data }: { data: any }) {
  return (
    <div className="flex flex-row space-x-8 mt-4">
      <img
        className="w-32 h-32 rounded-full border-2 border-myDarkBlue"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      />

      <div className="rounded-lg bg-gray-100 p-4 grow">
        <p>Iqama number:</p>
        <h1 className="text-myDarkBlue text-xl font-medium mb-2">
          {data?.iqama.iqamaNumber}
        </h1>
      </div>
      <div className="rounded-lg bg-gray-100 p-4 grow">
        <p>Phone number:</p>
        <h1 className="text-myDarkBlue text-xl font-medium mb-2">
          {data?.contact.phoneNumber}
        </h1>
      </div>
    </div>
  );
}
