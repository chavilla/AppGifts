import React, {  } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';

export const GridGif = ({ category }) => {

  const {data, loading}=useFetchGifs(category);


  // console.log(data);

  return (
    <>
      <h2>{category}</h2>
        { loading && <p>Loading</p> }
       <div className="card-grid">
          {data.map((image) => (
            <GifGridItem key={image.id} {...image} />
          ))}
      </div> 
    </>
  );
};

GridGif.propTypes={
  category: PropTypes.string.isRequired
}