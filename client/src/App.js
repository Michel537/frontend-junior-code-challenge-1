import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ArtikelListPage from "./pages/ArtikelListPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./NavBar";
import CreateArtikelPage from "./pages/CreateArtikelPage";


const  App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element= {<HomePage/>} />
          <Route path="/artikel" element= {<ArtikelListPage/>} />
          <Route path="/create" element= {<CreateArtikelPage/>} />
          <Route path="/about" element= {<AboutPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
