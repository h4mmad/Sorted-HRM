"use client";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { usePathname } from "next/navigation";
import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";

export default function NestedNav({
  dropDownTitle,
  routes,
}: {
  dropDownTitle: string;
  routes: { title: string; to: string }[];
}) {
  const currentPath = usePathname();
  const [dropDownIsOpen, setDropDownIsOpen] = useState(true);
  return (
    <>
      <div
        className={
          "w-full p-3  hover:bg-myLightBlue dark:hover:bg-gray-700 cursor-pointer flex flex-row items-center justify-between select-none"
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
              "w-full p-3 cursor-pointer hover:bg-myLightBlue dark:hover:bg-gray-700",
              {
                "bg-myLightBlue dark:bg-gray-700": route.to == currentPath,
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
}
