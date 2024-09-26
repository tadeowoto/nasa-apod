import PropTypes from "prop-types";


export function NasaCard({ title, image, description }) {
  return (
    <article className="NasaCard">
      <div className="NasaCard-TopInfo">
        <h1 className="NasaCard-mainTitle">{title}</h1>
        <p className="NasaCard-subTitle">
          Explore the cosmos with NASA daily celestial showcase
        </p>
      </div>
      <div className="NasaCard-bottomInfo">
        <img src={image} alt="Nasa image" className="NasaCard-image" />
        <p className="NasaCard-description">{description}</p>
      </div>
    </article>
  );
}

NasaCard.propTypes = {
    title: PropTypes.string.isRequired,      
    image: PropTypes.string.isRequired,       //no se que mierda es esto pero ESLINT me rompio las pelotas hasta que lo puse jajsa
    description: PropTypes.string.isRequired
} 
