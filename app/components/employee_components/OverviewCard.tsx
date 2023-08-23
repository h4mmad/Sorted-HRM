import { DateTime } from "luxon";
export default function EmployeeOverviewCard({
  data,
}: {
  data: Employee | undefined;
}) {
  {
    console.log(
      DateTime.fromFormat(String(data?.iqama.iqamaExpiry), "yyyy-MM-dd")
        .diffNow()
        .as("days")
        .toFixed(0)
    );
  }

  return (
    <div className="flex flex-row space-x-8 mt-4">
      {/* Personal info */}
      <div className="rounded-lg bg-white p-4  border border-slate-300 shadow-md">
        <div className="flex flex-row space-x-8 p-2">
          <img
            className="w-32 h-32 rounded-full border-2 border-myDarkBlue"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          />

          <div className="flex flex-col space-y-3">
            <p className="text-myDarkBlue text-3xl ">
              {data?.personal.fullName}
            </p>
            <p className="text-myDarkBlue">{data?.job.designation}</p>
            <div>
              <p className="text-gray-500">{data?.personal.gender}</p>

              <p className="text-gray-500">
                {Math.floor(
                  Math.abs(
                    Number(
                      DateTime.fromFormat(
                        String(data?.personal.dateOfBirth),
                        "yyyy-MM-dd"
                      )
                        .diffNow()
                        .as("years")
                    )
                  )
                )}{" "}
                years
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Iqama info */}
      <div className="rounded-lg bg-white p-4 grow border border-slate-300 shadow-md">
        <div>
          <div>
            <p>Iqama number:</p>
            <p className="text-myDarkBlue text-xl font-medium mb-2">
              {data?.iqama.iqamaNumber}
            </p>
          </div>
          {/* <div>
            <p className="text-gray-500">Days to expiry:</p>
            <p>
              {DateTime.fromFormat(
                String(data?.iqama.iqamaExpiry),
                "yyyy-MM-dd"
              )
                .diffNow()
                .as("days")
                .toFixed(0)}
            </p>
          </div> */}
        </div>

        <p className="text-gray-500">Expires on:</p>
        <p>
          {DateTime.fromFormat(
            String(data?.iqama.iqamaExpiry),
            "yyyy-MM-dd"
          ).toLocaleString({ dateStyle: "long" })}
        </p>
      </div>
    </div>
  );
}
