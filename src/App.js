import './App.css';
import NavBar from "./NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import logo from "./logo1.png"

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

            <Footer email="3BCWebServices@gmail.com" companyLogo={logo} />

        </>
    )
}

export default App;
