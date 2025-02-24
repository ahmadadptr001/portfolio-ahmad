import "./App.css";

import Hero from "./components/home/Hero";
import Navbar from "./components/main/Navbar";
import Pendidikan from "./components/home/Pendidikan";
import NavbarDock from "./components/main/NavbarDock";

function App() {
   return (
      <>
         <Navbar />
         <Hero />
         <Pendidikan />
         <NavbarDock />
      </>
   );
}

export default App;
