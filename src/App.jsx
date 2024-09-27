import { NasaCard } from "./components/molecules/NasaCard";
import { NasaHeader } from "./components/organisms/NasaHeader";
import { NasaFooter } from "./components/organisms/NasaFooter";
import { useEffect, useState } from "react";
import React from "react";
function App() {

  const [apiData, setApiData] = useState({});
  const[ isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .finally(() => setIsLoading(false))
  }, []); // quiero que se ejecute una sola vez cuando reenderiza el componente

  return (

    <>
    <div className="flex flex-col min-h-screen">
        <NasaHeader />
        <section className="bg-mainbg flex-grow flex justify-center items-center">
          <NasaCard
            title={apiData.title}
            image={apiData.url}
            description={apiData.explanation}
            isLoading={isLoading}
          />
        </section>
        <NasaFooter />
    </div>
    </> 
    
    
  )
}

export default App;
