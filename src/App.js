import React from 'react';
import ResumeState from './Context/ResumeState';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ErrorPage from './Pages/Error/ErrorPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <ResumeState>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </div>
    </ResumeState>
  );
}

export default App;
