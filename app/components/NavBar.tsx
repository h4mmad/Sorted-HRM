import User from "./User";
import NestedNav from "./NestedNav";
import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <div className="flex flex-col bg-myDarkBlue h-screen fixed w-fit">
      <NavButton title="Dashboard" to="/dashboard" />

      <NestedNav
        dropDownTitle="Employees"
        routes={[
          { title: "View all", to: "/employees" },
          { title: "Add employee", to: "/employees/add" },
          {
            title: "Model builder",
            to: "/employees/model-builder",
          },
        ]}
      />

      <User />
    </div>
  );
}
