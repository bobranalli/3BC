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
                    <Route path="/3BC/">{<Home />}</Route>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="/3BC/team" element={<Team />} />
                    <Route path="/3BC/about" element={<About />} />
                    <Route path="/3BC/contact" element={<Contact />} />

                </Routes>
            </div>

        </>
    )
}

export default App;