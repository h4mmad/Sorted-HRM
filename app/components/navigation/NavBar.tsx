import NestedNav from "./NestedNav";
import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <div className="flex flex-col bg-myDarkBlue dark:bg-black h-screen  w-fit dark:border-r justify-items-end">
      <NavButton title="Dashboard" to="/dashboard" />

      <NestedNav
        dropDownTitle="Employees"
        routes={[
          { title: "View employees", to: "/employees" },
          { title: "Add employee", to: "/employees/add" },
          {
            title: "Model builder",
            to: "/employees/model_builder",
          },
        ]}
      />
    </div>
  );
}
