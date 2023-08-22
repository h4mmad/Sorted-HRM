"use client";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

export default function User() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <div className="relative">
      {session?.user?.image && (
        <img
          onClick={() => setIsOpen(!isOpen)}
          src={session?.user?.image}
          referrerPolicy="no-referrer"
          className="w-12 rounded-full border-2 cursor-pointer border-myLightBlue"
        />
      )}

      {isOpen && session?.user?.image && (
        <div className="flex flex-col p-3 border border-slate-300  rounded-lg w-auto bg-white shadow-lg absolute right-0 z-10 mt-1">
          <div>
            <p className="text-2xl text-myDarkBlue font-semibold">
              {session.user.name}
            </p>

            <p className=" text-myDarkBlue">{session.user.email}</p>
          </div>

          <div className="mt-4">
            <button className="px-2 py-1 w-full text-left text-myDarkBlue     hover:bg-slate-100  rounded-lg">
              Profile
            </button>
            <button className="px-2 py-1 w-full text-left text-myDarkBlue   hover:bg-slate-100  rounded-lg">
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
