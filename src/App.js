import "./App.css";

import Hero from "./components/home/Hero";
import Navbar from "./components/main/Navbar";
import NavbarDock from "./components/main/NavbarDock";

function App() {
   return (
      <>
         <Navbar />
         <Hero />
         <NavbarDock />
      </>
   );
}

export default App;
