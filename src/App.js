import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Footer from "./components/Footer";
import OpinionPage from "./components/pages/opinionPage";
import Culture from "./components/pages/Culture";
import CareerChange from "./components/pages/CareerChange";
import Sports from "./components/pages/Sports";
import Slide2 from "./components/others/Flashnews1";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Header2 />
        <Slide2 />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/CareerChange" element={<CareerChange />}></Route>
          <Route path="/OpinionPage" element={<OpinionPage />}></Route>
          <Route path="/Sports" element={<Sports />}></Route>
          <Route path="/Culture" element={<Culture />}></Route>
        </Routes>
        <div className="pt-2">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
