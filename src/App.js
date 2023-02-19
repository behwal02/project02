import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import "./styles/App.scss";
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/mediaquery.scss"



function App() {
  return (
   <Router>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<div><h1>Page Not Found! Error 404 </h1></div>} />
    </Routes>
    <Footer />
   </Router>
  );
}

export default App; 