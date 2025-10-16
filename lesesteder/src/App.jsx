import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Homepage';
import Library from './Library';

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



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
    
//       {/* <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

// export default App
