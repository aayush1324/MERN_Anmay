import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavbar from './Navbar/TopNavbar';
import BottomFooter from './Footer/BottomFooter';
import NEET from './Papers/NEET';
import JEE from './Papers/JEE';

function App() {
  return (
    <Router>
      <TopNavbar />

      <div style={{ minHeight: '80vh' }}>
        {/* Main content where the routes will be rendered */}
        <Routes>
          <Route path="/JEE" element={<JEE />} />
          <Route path="/NEET" element={<NEET />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      
      <BottomFooter />
    </Router>
  );
}

export default App;
