"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "./User";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import classNames from "classnames";

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
            title: "Master record",
            to: "/application/employees/master-record",
          },
        ]}
      />

      <User />
    </div>
  );
}

const NavButton = ({ title, to }: any) => {
  const currentPath = usePathname();
  const conditionalClassName = classNames([
    "w-full p-3 cursor-pointer",
    {
      "bg-myLightBlue": to == currentPath,
      "hover:bg-myLightBlue": to != currentPath,
    },
  ]);
  return (
    <Link href={to}>
      <div className={conditionalClassName}>
        <h2 className="text-white font-bold">{title}</h2>
      </div>
    </Link>
  );
};

const NestedNav = ({
  dropDownTitle,
  routes,
}: {
  dropDownTitle: string;
  routes: { title: string; to: string }[];
}) => {
  const currentPath = usePathname();
  const [dropDownIsOpen, setDropDownIsOpen] = useState(true);
  return (
    <>
      <div
        className={
          "w-full p-3  hover:bg-myLightBlue cursor-pointer flex flex-row items-center justify-between select-none"
        }
        onClick={() => setDropDownIsOpen(!dropDownIsOpen)}
      >
        <h2
          onClick={() => setDropDownIsOpen(!dropDownIsOpen)}
          className={classNames(["text-white font-bold"])}
        >
          {dropDownTitle}
        </h2>

        <div
          className={classNames([
            "text-white transition-transform ease-linear",
            {
              "rotate-180": dropDownIsOpen,
              "rotate-0": !dropDownIsOpen,
            },
          ])}
        >
          <ExpandLessIcon />
        </div>
      </div>
      {dropDownIsOpen && (
        <div>
          {routes.map((route, index) => {
            const conditionalClassName = classNames([
              "w-full p-3 cursor-pointer hover:bg-myLightBlue",
              {
                "bg-myLightBlue": route.to == currentPath,
              },
            ]);
            return (
              <Link href={route.to} key={index}>
                <div className={conditionalClassName}>
                  <h2 className={classNames("text-white text-sm ml-2", {})}>
                    {route.title}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
