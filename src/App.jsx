import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Projects } from "./pages/Projects.jsx";
import { Experience } from "./pages/Experience.jsx";
import Layout from "./components/Layout .jsx";
import { Contact } from "./pages/Contact.jsx";
// import { Tools } from "./pages/Tools";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
