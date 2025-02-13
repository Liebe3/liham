import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GettingUserName from './components/GettingUserName';
import Letter from './components/LetterForStudents';
import Flowers from './components/Flowers';
import LetterForWorkers from './components/LetterForWorkers';
import LetterForWorkingStudents from './components/LetterForWorkingStudents';

function App() {
  return (
    // Add basename here to match the GitHub Pages deployment path
    <Router basename="/liham">
      <Routes>
        <Route path="/" element={<GettingUserName />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/letter-for-workers" element={<LetterForWorkers />} />
        <Route path="/letter-for-working-students" element={<LetterForWorkingStudents />} />
        <Route path="/flowers" element={<Flowers />} />
      </Routes>
    </Router>
  );
}

export default App;
