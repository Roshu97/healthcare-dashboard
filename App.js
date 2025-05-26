import React from 'react';
import './App.css';
import Header from './src/components/Header';
import Sidebar from './src/components/Sidebar';
import Dashboard from './src/components/Dashboard';

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