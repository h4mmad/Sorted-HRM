"use client";
import { useState } from "react";
import EmployeeCard from "../../components/EmployeeCard";
import { Search } from "../../components/Search";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Employees() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-3xl text-myLightBlue font-semibold">Employees</h1>
        <Search />
      </div>

      <div className="relative select-none">
        <div
          className="px-4 py-1 bg-myLightBlue  text-white cursor-pointer rounded-full w-fit text-center mt-8 flex space-x-2 items-center"
          onClick={() => setDropDown(!dropDown)}
        >
          <p>Filter by</p>
          {dropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {dropDown && (
          <div className="p-2 bg-white border border-myLightBlue absolute rounded-xl left-0 w-fit mt-1">
            <div className="flex justify-between items-center mt-2 space-x-4">
              <p className="text-sm">Gender</p>
              {/* <SwitchChoiceSelector
                choices={["Male", "Female"]}
                values={["male", "female"]}
                name="Gender"
                label="Gender"
                labelStyle=""
                stateFunctionProp={() => {}}
              /> */}
            </div>
            <div className="flex justify-between items-center mt-2 space-x-4">
              <p className="text-sm">Status</p>
              {/* <SwitchChoiceSelector
                choices={["Active", "Inactive"]}
                values={["active", "inactive"]}
                name="Status"
                label="Status"
                labelStyle=""
                stateFunctionProp={() => {}}
              /> */}
            </div>
          </div>
        )}
      </div>

      {/* employees row */}
      <div className="mt-12">
        <EmployeeCard
          name="Jane Doe"
          designation="Science Teacher"
          iqama="2385477922"
          contactNo="+966 530 507 844"
          status="Active"
          pictureURL="https://travellersworldwide.com/wp-content/uploads/2023/02/Shutterstock_1765167053.jpg"
        />
        <EmployeeCard
          name="John Doe"
          designation="Science Teacher"
          iqama="9385477912"
          contactNo="+966 530 507 844"
          status="Active"
          pictureURL="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/My-Passport-Size%28Small-Beard%29-1MB.jpg/499px-My-Passport-Size%28Small-Beard%29-1MB.jpg"
        />
        <EmployeeCard
          name="Martin Rick"
          designation="Science Teacher"
          iqama="3385477952"
          contactNo="+966 530 507 844"
          status="Inactive"
          pictureURL="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/My-Passport-Size%28Small-Beard%29-1MB.jpg/499px-My-Passport-Size%28Small-Beard%29-1MB.jpg"
        />
      </div>
    </div>
  );
}
