import SearchBar from "@/components/SearchBar";
import React from "react";

// The children props is implicitly slot..
// app/page.js is equivalent to "app/@children/page.js"
const DictionaryLayout = ({ modal, children }) => {
  return (
    <div className="w-full">
      <SearchBar />
      <div className="border border-cyan-300">{modal}</div>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default DictionaryLayout;
