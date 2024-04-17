import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Commission from "./pages/Commission";
import Journal from "./pages/Journal";
import Scenographie from "./pages/Scenographie";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
// import Project from "./pages/Project";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='projet1' element={<Project1 />} />
                    <Route path='projet2' element={<Project2 />} />
                    <Route path='projet3' element={<Project3 />} />
                    <Route path='commission' element={<Commission />} />
                    <Route path='journal' element={<Journal />} />
                    <Route path='scenographie' element={<Scenographie />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
