import { searchResults } from "@/lib/search";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = ({ params }) => {
  // fetching data

  // check if data is available
  // if(!params.wordSlug){
  //   notFound();
  // }

  return {
    title: params.wordSlug,
    description: "This is Description",
  };
};

const WordSlugPage = async ({ params }) => {
  const { word, phonetic, phonetics, meanings } = await searchResults(
    params.wordSlug
  );

  return (
    <div className="mx-auto w-full h-screen p-4">
      <div className="text-4xl">
        <h1>{word}</h1>
      </div>
      <p>{phonetic}</p>
      <div>sadf</div>
    </div>
  );
};

export default WordSlugPage;
