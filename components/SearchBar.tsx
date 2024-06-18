"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  return (
    <Input
      className="text-lg shadow-inner h-11"
      placeholder="Search"
      type="search"
      onFocus={() => setShowModal(true)}
      onBlur={() => setShowModal(false)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          router.push(`dictionary/${e.target.value}`);
        }
      }}
    />
  );
};

export default SearchBar;
