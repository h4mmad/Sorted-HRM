"use client";
import NavBar from "../components/NavBar";
import "@/app/globals.css";
import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";

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
  const myData = useSession({
    required: true,
  });
  console.log(myData);
  if (myData.status === "authenticated") {
    return (
      <div>
        <NavBar />
        <div className="ml-32 flex justify-center">{children}</div>
      </div>
    );
  }

  if (myData.status === "loading") {
  }
}