//import ProjectProfile from '../src/components/projectProfile.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Allotment from './Pages/Allotment.jsx';
import CV from './Pages/CV.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import Navbar from './Navbar.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/allotment" element={<Allotment/>}/>
        <Route path="/cv" element={<CV/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
      {/*Här kan man lägga in en footer på samma sätt som en navbar */}
    </BrowserRouter>
    </>
  )
}

export default App
