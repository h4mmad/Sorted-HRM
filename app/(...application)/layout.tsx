"use client";
import NavBar from "../components/NavBar";
import "@/app/globals.css";
import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import User from "../components/User";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Sorted HRM",
  description: "Easy to use HR management system",
};

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const myData = useSession({
  // required: true,
  // });
  // console.log(myData);
  // if (myData.status !== "authenticated") {
  return (
    <div className="flex h-screen">
      <div className="">
        <NavBar />
      </div>

      <div className="overflow-y-auto flex-1 h-full no-scrollbar px-14 py-14">
        {children}
      </div>
      <div className="bg-myDarkBlue p-4">
        <User />
      </div>
    </div>
  );
  // }

  // if (myData.status === "loading") {
  // }
}
