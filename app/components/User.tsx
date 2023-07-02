"use client";
import { useState } from "react";
import classNames from "classnames";
import { signOut, useSession } from "next-auth/react";

export default function User() {
  const [slideUp, setSlideUp] = useState(false);
  const { data: session } = useSession();

  return (
    <div
      className={classNames([
        "w-full mt-auto p-2 bg-myLightBlue relative transition-transform ease-in-out",
        {
          "translate-y-2/3": !slideUp,
          "translate-y-0": slideUp,
        },
      ])}
    >
      {session?.user?.image && (
        <img
          src={session?.user?.image}
          referrerPolicy="no-referrer"
          className="w-12 rounded-full  outline-yellow-400 mx-auto select-none cursor-pointer hover:scale-105 "
          onClick={() => {
            setSlideUp(!slideUp);
          }}
        />
      )}

      <div className="mt-1">
        <h2 className="text-white text-center">
          <span className="font-bold block">{session?.user?.name}</span>
        </h2>
        <div className="bg-myLightBlue hover:bg-myDarkBlue px-2 py-1 text-center cursor-pointer rounded-full m-2 ">
          <p className="text-sm text-white">Profile</p>
        </div>
        <div
          className="bg-myLightBlue hover:bg-myDarkBlue px-2 py-1 text-center cursor-pointer rounded-full m-2 "
          onClick={() => {
            signOut({ callbackUrl: "/login" });
          }}
        >
          <p className="text-sm text-white">Sign out</p>
        </div>
      </div>
    </div>
  );
}
