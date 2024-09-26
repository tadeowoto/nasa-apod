import { useEffect, useState } from "react";
import "./App.css";
import { NasaCard } from "./components/NasaCard";

function App() {

  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []); // quiero que se ejecute una sola vez cuando reenderiza el componente

  return (
    
      <NasaCard title={apiData.title} image={apiData.url} description={apiData.explanation}/>
    
  );
}

export default App;
