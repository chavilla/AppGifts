import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GridGif } from "./components/GridGif";

const GifExpertApp = ({categories=[]}) => {

  const [category, setCategory] = useState(categories);

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
