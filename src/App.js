import React, { useEffect, useState } from 'react';
import './App.css'
import Rutas from './routes/PublicRutas';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  
  const [loading, setloading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      // simulacion
      setloading(false)
    }, 4000);
    
  }, []);


  return (
    <div className="App ">{
       loading ? <div className="spinner-container"><LoadingSpinner/> </div>:
      <AuthProvider>
      <BrowserRouter>
      <Rutas/>
      </BrowserRouter>
      </AuthProvider>
    }
    </div>  
  );
}

export default App;
