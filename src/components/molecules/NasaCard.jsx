import PropTypes from "prop-types";
import { Button } from "../atoms/Button";

export function NasaCard({ title, image, description }) {
  return (
    <article className="bg-cardbg w-3/6 min-h-96 flex flex-col justify-center items-center gap-8">
      <div className="w-full h-3/6 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-white">{title}</h1>
        <p className="text-gray-400">
          Explore the cosmos with NASA daily celestial showcase
        </p>
      </div>
      <div className="w-full h-3/6 flex flex-col justify-center items-center gap-8">
        <img src={image} alt="Nasa image" className="max-w-80" />
        <p className="text-gray-400 text-justify">{description}</p>
        <Button />
      </div>
    </article>
  );
}


