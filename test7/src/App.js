import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import MyRoutes from './routes/MyRoutes';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <MyRoutes></MyRoutes>

    </div>
  );
}

export default App;
