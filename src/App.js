import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useColorContext } from "./context/ColorContextProvider";
import Routes from "./components/Routes";

const App = () => {
  const { bgColor } = useColorContext();
  return (
    <div>
      <div className="min-h-screen" style={{ backgroundColor: bgColor }}>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
