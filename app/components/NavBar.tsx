import User from "./User";
import NestedNav from "./NestedNav";
import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <div className="flex flex-col bg-myDarkBlue dark:bg-black h-screen fixed w-fit dark:border-r border-gray-700 justify-items-end">
      <NavButton title="Dashboard" to="/dashboard" />

      <NestedNav
        dropDownTitle="Employees"
        routes={[
          { title: "View employees", to: "/employees" },
          { title: "Add employee", to: "/employees/add" },
          {
            title: "Model builder",
            to: "/employees/model-builder",
          },
        ]}
      />
      {/* <User /> */}
      <div className="flex flex-row justify-center items-center ">
        <button className="rounded-full text-white border border-myLightBlue py-1 px-4">
          Account
        </button>
      </div>
    </div>
  );
}
