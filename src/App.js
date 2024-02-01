import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<ShowList />} />
        <Route path="/show/:id" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
