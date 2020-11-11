import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GridGif } from "./components/GridGif";

const GifExpertApp = () => {
  const [category, setCategory] = useState(["samurai x"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategory={setCategory} />
      <hr />

      <ol>
        {category.map((category, i) => (
          <GridGif key={i} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
