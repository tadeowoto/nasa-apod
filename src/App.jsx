import { useEffect, useState } from "react";
import { NasaCard } from "./components/molecules/NasaCard";
import { NasaHeader } from "./components/organisms/NasaHeader";
import { NasaFooter } from "./components/organisms/NasaFooter";
function App() {

  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []); // quiero que se ejecute una sola vez cuando reenderiza el componente

  return (

    <>
    <NasaHeader />
    <section className="bg-mainbg w-full h-screen flex justify-center items-center ">
      <NasaCard
        title={apiData.title}
        image={apiData.url}
        description={apiData.explanation}
      />
    </section>
    <NasaFooter />
    </>
    
    
  );
}

export default App;
