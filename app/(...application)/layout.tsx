"use client";
import NavBar from "../components/navigation_components/NavBar";
import "@/app/globals.css";
import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import User from "../components/navigation_components/User";
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

      <div className="overflow-y-auto flex-1 h-full  px-14 py-5 relative bg-slate-100">
        {/* <div className="absolute p-4 w-1/2 text-center m bg-yellow-100 rounded-md">
          ERROR
        </div> */}
        {children}
      </div>
      <div className="border border-l-2 p-4">
        <User />
      </div>
    </div>
  );
  // }

  // if (myData.status === "loading") {
  // }
}
