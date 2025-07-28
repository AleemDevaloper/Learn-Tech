
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import "./assets/Scss/main.css";
import Index from './components/Index.jsx';
import Header from "./components/Header.jsx";
import Footer from "./components/Fotter.jsx";
import About from "./components/about.jsx";
// import Eror from "./components/eror.jsx";
import Web from "./components/web.jsx";
import Appdev  from './components/app-dev.jsx';
// import Mobile from './mobile.jsx';


function App(){
  return (
    <>
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header/>
        
          <Routes>
            {/* Main pages  */}
            <Route path="/" element={<Index />} />
            <Route path="/web" element={<Web />} />
            <Route path="/about" element={<About />} />
            <Route path="/app" element={<Appdev />} />
            <Route path='*' element={<Index />} /> 
          </Routes>
       
        <Footer/>
      </div>
    </Router>
    </>
  );
};

export default App;