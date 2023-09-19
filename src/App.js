import React, { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import Rutas from './routes/PublicRutas';


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
      <>
      <BrowserRouter>
      <Rutas/>
      </BrowserRouter>
      </>
    }
    </div>  
  );
}

export default App;
