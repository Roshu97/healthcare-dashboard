// Healthcare Dashboard
// Started: September 2023
// Developer: Roshan
// Last updated: October 2023

import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
