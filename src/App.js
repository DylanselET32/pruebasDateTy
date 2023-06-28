import { useState } from 'react';
import tokenFCM from './messaging_init_in_sw';
import { useEffect } from 'react';

function App() {
  const [token,setToken] = useState("Hola");
  const fetch = async ()=>{
    const cToken = await tokenFCM()
    console.warn(cToken)
      setToken(cToken)
  }
  useEffect(()=>{
    
      fetch()
   
    
  },[])
  return (
    <div className="App">
      <h1>{token}</h1>
      
    </div>
  );
}

export default App;
