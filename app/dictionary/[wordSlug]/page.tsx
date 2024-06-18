import { searchResults } from "@/lib/search";
import { notFound } from "next/navigation";
import React from "react";
import { clsx } from "clsx";

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
    <div className="rounded-lg bg-card shadow-sm text-card-foreground border mx-auto w-full h-screen p-4 container">
      <div className="text-4xl">
        <h1>{word}</h1>
      </div>

      <div className="flex gap-4">
        {/* uk */}
        <div>
          <p>uk</p>
          <p>{phonetics[0].text}</p>
        </div>

        {/* us */}
        <div>
          <p>us</p>
          <p>{phonetics[1].text}</p>
        </div>
      </div>

      <div>-----------</div>
      <section className="mt-4">
        <h3 className="text-2xl">Meaning</h3>
      </section>
    </div>
  );
};

export default WordSlugPage;
