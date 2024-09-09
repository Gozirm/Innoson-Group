import "./App.css";
import Article from "./components/Article";
import Hero from "./components/Hero";
import Main from "./components/Main";
import SubFooter from "./components/SubFooter";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Article/>
      <Main/>
      <SubFooter/>
      <Footer/>
    </>
  );
}

export default App;
