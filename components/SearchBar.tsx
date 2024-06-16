"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";

const SearchBar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Input
      className="text-lg shadow-inner h-11"
      placeholder="Search"
      type="search"
      onFocus={() => setShowModal(true)}
      onBlur={() => setShowModal(false)}
    />
  );
};

export default SearchBar;
