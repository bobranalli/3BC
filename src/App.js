import './App.css';
import NavBar from "./NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import { Route, Routes } from "react-router-dom";

function App() {


    return (
        <>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>

        </>
    )
}

export default App;
