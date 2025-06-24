import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Pages/Shared/Navbar";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Programs from "./components/Pages/Apps";
import Plugins from "./components/Pages/Plugins";
import Packs from "./components/Pages/Packs";

import Footer from "./components/Pages/Shared/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Apps' element={<Programs />} />
        <Route path='/Plugins' element={<Plugins />} />
        <Route path='/Packs' element={<Packs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
