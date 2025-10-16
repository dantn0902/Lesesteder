import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Homepage';
import Library from './Librarypage';


export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Library" element={<Library />} />
        </Routes>
      </div>
    </Router>
  );
}