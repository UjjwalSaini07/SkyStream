import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout.jsx";
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx'

function App() {
  return (
    <Router>
        <Header/>
        <>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </>
    </Router>
  );
}

export default App;
