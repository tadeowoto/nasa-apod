import PropTypes from "prop-types";
import { Button } from "../atoms/Button";
import React from "react";
export function NasaCard({ title, image, description }) {
  return (
    <article className="bg-cardbg max-w-4xl w-full max-h-[90vh] h-auto flex flex-col justify-center items-center gap-4 p-4 box-border rounded-2xl shadow-lg">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl text-white">{title}</h1>
        <p className="text-gray-400">
          Explore the cosmos with NASA daily celestial showcase
        </p>
      </div>
      <div className="w-full flex flex-row justify-center items-center gap-4 ">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <a href={image} target="_blank" rel="noreferrer" className="hover:opacity-70 hover:rounded-md hover:transform hover:scale-105 transition-all duration-300 ">
            <img src={image} alt="Nasa image" className="w-full max-w-xs h-auto object-cover" />
          </a>
          <Button /> 
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-sm text-gray-400 text-justify">{description}</p>
        </div>
      </div>
    </article>
  );
}


NasaCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}