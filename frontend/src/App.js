// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Resultats from "./pages/Resultats";

// function App() {
//   return (
//     <div>
//       <Resultats />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // La barre de navigation
import Home from './pages/Home';
import Infrastructures from './pages/Infrastructures';
import Contact from './pages/Contact';
import Resultats from './pages/Resultats';
import Login from './pages/Login'; 
import Eleve from './pages/Eleve';


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/infrastructures" element={<Infrastructures />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resultats" element={<Resultats />} />
                <Route path="/login" element={<Login />} />
                <Route path="/eleves" element={<Eleve />} />
            </Routes>
        </Router>
    );
};

export default App;
