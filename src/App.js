import React from 'react';
import './App.css'
import Rutas from './routes/PublicRutas';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App ">
      <AuthProvider>
      <BrowserRouter>
      <Rutas/>
      </BrowserRouter>
      </AuthProvider>
 
    </div>
  );
}

export default App;
