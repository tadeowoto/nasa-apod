import PropTypes from "prop-types";
import { Button } from "../atoms/Button";
import React from "react";
export function NasaCard({ title, image, description }) {
  return (
    <article className="bg-cardbg max-w-4xl h-auto flex flex-col justify-center items-center gap-8 p-8 box-border rounded-3xl shadow-lg ">
      <div className="w-full h-3/6 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-white">{title}</h1>
        <p className="text-gray-400">
          Explore the cosmos with NASA daily celestial showcase
        </p>
      </div>
      <div className="w-full h-3/6 flex flex-col justify-center items-center gap-8">
        <img src={image} alt="Nasa image" className="max-w-2xl" />
        <p className="text-gray-400 text-justify">{description}</p>
        <Button />
      </div>
    </article>
  );
}


NasaCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}