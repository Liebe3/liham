import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GettingUserName from './components/GettingUserName';
import Letter from './components/LetterForStudents';
import Flowers from './components/Flowers';
import VirtualHug from './components/VirtualHug';

function App() {
  return (
    // Add basename here to match the GitHub Pages deployment path
    <Router basename="/liham">
      <Routes>
        <Route path="/" element={<GettingUserName />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="hug" element={<VirtualHug/>}/>
      </Routes>
    </Router>
  );
}

export default App;
