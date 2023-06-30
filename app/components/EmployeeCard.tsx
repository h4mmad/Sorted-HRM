"use client";
import Link from "next/link";

export default function EmployeeCard({
  name,
  designation,
  iqama,
  contactNo,
  pictureURL,
  status,
}: any) {
  return (
    <div className="mt-5 flex flex-row">
      {/* profile pic */}
      <img
        src={pictureURL}
        className="bg-gray-200 h-20 w-20 mr-2 rounded-full border-2 border-gray-300 self-center"
      />

      {/* employee info */}

      <div className="flex-grow">
        <div className=" bg-gray-200 p-2 rounded-tl-md rounded-bl-md">
          <div className="flex flex-row space-x-24 items-center mb-2">
            <h1 className="text-myDarkBlue font-bold text-xl flex-1">{name}</h1>
            <h4 className="text-sm">{contactNo}</h4>
          </div>

          <div className="flex flex-row items-end">
            <div className="flex-grow">
              <h4 className="text-sm">{designation}</h4>
              <h4 className="text-sm">Iqama No: {iqama}</h4>
            </div>
            <div>
              <h4
                className={
                  status === "Active"
                    ? "text-green-600 text-sm"
                    : "text-red-600 text-sm"
                }
              >
                {status}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Link
        href={{
          pathname: `/application/employees/${iqama}`,
          query: { name, designation, iqama, contactNo, pictureURL, status },
        }}
        className="w-12 h-100 rounded-tr-md rounded-br-md  text-white bg-myLightBlue hover:bg-myDarkBlue flex  justify-center items-center cursor-pointer "
      >
        <svg
          width="11"
          height="19"
          viewBox="0 0 11 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="1.41422"
            width="2"
            height="13.0937"
            rx="1"
            transform="rotate(-45 0 1.41422)"
            fill="#FFF
            "
          />
          <rect
            x="9.25854"
            y="8"
            width="2"
            height="13.0937"
            rx="1"
            transform="rotate(45 9.25854 8)"
            fill="#FFF
            "
          />
        </svg>
      </Link>
    </div>
  );
}
