import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainPage from './MainPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__page'>
       <Sidebar />
       <MainPage />
      </div>
    </div>
  );
}

export default App;
