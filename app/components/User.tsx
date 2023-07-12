"use client";
import { useState } from "react";
import classNames from "classnames";
import { signOut, useSession } from "next-auth/react";

export default function User() {
  const [slideUp, setSlideUp] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="w-fit mt-4 mr-4">
      {session?.user?.image && (
        <img
          src={session?.user?.image}
          referrerPolicy="no-referrer"
          className="w-12 rounded-full  mx-auto select-none cursor-pointer border border-myDarkBlue "
          onClick={() => {
            setSlideUp(!slideUp);
          }}
        />
      )}
    </div>
  );
}
