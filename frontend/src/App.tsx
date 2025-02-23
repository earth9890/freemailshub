

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components (create these as needed)
import Dashboard from './pages/dashboard/dashboard';
import Authentication from './pages/authentication/authentication';
import Domains from './pages/domains/domains';
import Account from './pages/account/account';
import Home from './pages/home/home';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;
