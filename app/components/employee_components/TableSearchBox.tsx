"use client";

import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import classNames from "classnames";
export const Search = ({
  setFiltering,
}: {
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={classNames([
        "bg-white rounded-lg border border-slate-300",
        { "outline outline-2": isFocused },
      ])}
    >
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search anything..."
        className="bg-white rounded-md w-64 p-3 border-none outline-none appearance-none  placeholder:text-gray-400"
        onChange={(e) => setFiltering(e.target.value)}
      />
      <SearchIcon className="text-gray-500 m-2" />
    </div>
  );
};
