import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import AboutUs from "./components/pages/AboutUs";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/NewProject" element={<NewProject />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Project/:id" element={<Project />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
