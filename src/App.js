import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Kontakt from "./Kontakt";
import Korpa from "./Korpa";
import Navbar from './Navbar';
import Proizvodi from "./Proizvodi";

function App() {
  return (
    <div  >
    <BrowserRouter  >
      <Navbar ></Navbar>
      <Routes>
        <Route path="/" element={<Proizvodi></Proizvodi>}></Route>
        <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>
        <Route path="/korpa" element={<Korpa></Korpa>}></Route>

        
      </Routes>
      
  </BrowserRouter>

    </div>
  );
}

export default App;
