import {useState,useEffect} from "react";
import Index from "./navigation";
import {ImSwitch} from 'react-icons/im'

const getMode=()=>{
  if(localStorage.getItem('mode')){
    return localStorage.getItem('mode')
  }else{
    return 'mode-light';
  }
}
function App() {
  const [mode,setMode]=useState(getMode);

  const cambiaModalita=()=>{
    if(mode==='mode-light'){
      setMode('mode-dark')
    }else{
      setMode('mode-light')
    }

  }
useEffect(()=>{
  document.documentElement.className=mode;
  localStorage.setItem('mode',mode)
},[mode])
  return (
    <div className="App">
      <section className="container text-center my-3">
        <button className="btn-round" onClick={cambiaModalita}><ImSwitch className="icon"/></button>
        <Index />
      </section>
    </div>
  );
}

export default App;
