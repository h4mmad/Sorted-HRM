import User from "./User";
import NestedNav from "./NestedNav";
import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <div className="flex flex-col bg-myDarkBlue h-screen fixed w-fit">
      <NavButton title="Dashboard" to="/application/dashboard" />

      <NestedNav
        dropDownTitle="Employees"
        routes={[
          { title: "View all", to: "/application/employees" },
          { title: "Add employee", to: "/application/employees/new" },
          {
            title: "Model builder",
            to: "/application/employees/model-builder",
          },
        ]}
      />

      <User />
    </div>
  );
}
