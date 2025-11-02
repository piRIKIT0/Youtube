import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/home";
import Biblioteca from "./pages/library";
import Inscriçoes from "./pages/Subscribers";

function App() {

  const [openMenu, setOpenMenu] = useState(true)

  return (
    <BrowserRouter>
      <div className="App">
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div style={{ width: '100%', display: 'flex' }}>
          <Menu openMenu={openMenu} />
          <div style={{ width: '100%', padding: '50px 70px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/biblioteca" element={<Biblioteca />} />
              <Route path="/inscriçoes" element={<Inscriçoes />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
