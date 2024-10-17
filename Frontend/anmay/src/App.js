import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavbar from './Navbar/TopNavbar';
import BottomFooter from './Footer/BottomFooter';
import NEET from './Papers/NEET';
import JEE from './Papers/JEE';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Material from './Admin/Material';
import Paper from './Admin/Paper';
import BasicCalculator from './Calculators/BasicCalculator';
import PhysicsCalculator from './Calculators/PhysicsCalculator';
import ChemistryCalculator from './Calculators/ChemistryCalculator';
import MathCalculator from './Calculators/MathCalculator';
import Class1to10 from './Materials/Class1to10';
import Class11to12 from './Materials/Class11to12';
import Calculator from './Admin/Calculator';
import CarouselSlider from './Home/CarouselSlider';
import AccordionFAQ from './Home/AccordionFAQ';
import Home from './Home/Home';
import CBSE from './Courses/CBSE';

function App() {
  return (
    <Router>
      <TopNavbar />

      <div style={{ minHeight: '80vh' }}>
        {/* Main content where the routes will be rendered */}
        <Routes>
          <Route path="/JEE" element={<JEE />} />
          <Route path="/NEET" element={<NEET />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          <Route path="/Material" element={<Material />} />
          <Route path="/Paper" element={<Paper />} />
          <Route path="/Calculator" element={<Calculator />} />

          <Route path="/BasicCal" element={<BasicCalculator />} />
          <Route path="/PhysicsCal" element={<PhysicsCalculator />} />
          <Route path="/ChemistryCal" element={<ChemistryCalculator />} />
          <Route path="/MathCal" element={<MathCalculator />} />

          <Route path="/Class1-10" element={<Class1to10 />} />
          <Route path="/Class11-12" element={<Class11to12 />} />

          <Route path="/Home" element={<Home />} />
          <Route path="/CarouselSlide" element={<CarouselSlider />} />
          <Route path="/AccordionFaq" element={<AccordionFAQ />} />

          <Route path="/Cbse" element={<CBSE />} />




          {/* Add more routes as needed */}
        </Routes>
      </div>

      <BottomFooter />
    </Router>
  );
}

export default App;
