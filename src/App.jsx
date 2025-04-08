import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout.jsx";
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
// import ChatRoom from './pages/ChatRoom.jsx';
import ChatRoom from './components/ChatRoom.jsx';
import About from './pages/About.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Help from './pages/HelpCenter.jsx';
import Host from './components/HostRoom.jsx';
import Join from './components/JoinRoom.jsx';
import './App.scss';

function App() {
  return (
    <Router>
        <Header/>
        <>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<ChatRoom />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/help-center" element={<Help />} />
              <Route path="/host" element={<Host />} />
              <Route path="/join" element={<Join />} />
            </Route>
          </Routes>
        </>
    </Router>
  );
}

export default App;
