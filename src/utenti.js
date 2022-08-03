import React,{useReducer,useState,useEffect} from "react";
import {MdDeleteOutline} from "react-icons/md"
// import axios from "axios";
import Modal from './modal';
import reducer from "./reducer";
import { APRI_MODAL, CHIUDI_MODAL } from "./action";
import useFetch from "./useFetch";
const url = "https://jsonplaceholder.typicode.com/users";
// importo la funzione reducer e dichiaro lo stato iniziale da utilizzare con useReducer


const initialState={
  modalContent:'modal',
  isModalOpen:false
}

// componente
const Utenti = () => {
  const{dati,isLoading,isError,setDati}=useFetch(url);
  
  // uso il useReducer
  const[state,dispach]=useReducer(reducer,initialState)
  
  const [stato,setStato]=useState(dati);
  

  const ref=React.useRef(null);
  const ref2=React.useRef(null);

  

  const handlesrollaGiu =()=>{
    if(!ref||!ref.current){
      return
    }
    ref.current.scrollIntoView({behavior :"smooth", block:"center"})
  }

  const handlesrollaSopra =()=>{
    if(!ref2||!ref2.current){
      return
    }
    ref2.current.scrollIntoView({behavior :"smooth", block:"center"})
  }

  const apriModal=(id,dati)=>{
    dispach({type:APRI_MODAL,id:id,dati:dati})
  };

  const chiudiModal=()=>{
    dispach({type:CHIUDI_MODAL})
  };
  const removeItem=(id)=>{
   setDati(dati.filter(el=>el.id!==id))
   console.log(`utenti: ${id}`)
  }
 
  const ricarica=(stato)=>{
    console.log(stato);
    setDati(stato)
    
}
useEffect(()=>{setStato(oldValue=>oldValue)},[dati])

  if(isLoading){
    return(
      <Loading/>
    )
  }
  if(isError){
    return(
    <Error/>
    )
  }
  
  return (
    <section className="card d-flex shadow align-item-center p-4 mt-3 border-primary">
      <h3 className="mx-5" style={{fontVariant:'small-caps'}}>I tuoi profili</h3>
      <button ref={ref2} onClick={handlesrollaGiu} className="shadow mt-3 btn btn-primary">Scorri giù</button>
      { dati.map((el,index)=>{
        const {id,name:nome}=el;
        return (
        <article key={id} className="card shadow-lg mt-4 border-primary" style={{backgroundColor:"#a3baf0"}}>
          <div style={{ top:0,right:'5%'}}>
          <button className="btn btn-danger btn-round-cancel mt-2  " onClick={()=>removeItem(id)}><MdDeleteOutline className="icon "/></button>
          </div>
          <div className="row border-primary">
          <img className="rounded-circle shadow col-sm-3 col-md-2 ml-3 offset-1" src="../avatar.png" alt={nome} width={150} height={150}/>
          <h3 className=" col-sm-5 col-md-6 mt-4">
           {nome}
          </h3>
          </div>
          <div className="row justify-content-center">
            <button  onClick={()=>apriModal(index,dati)} 
              className="button btn-info mb-2 col-3">
              Info e-mail {id}
            </button>
          </div>
        </article>);
      })}
      <Modal
       modalContent={state.modalContent} 
       modalState={state.isModalOpen} 
       modalfunction={chiudiModal}
       >
      </Modal>
      <div>
      <button className=" btn btn-danger col-3 m-2" onClick={()=>setDati([])} >Cancella</button>
      <button className="btn btn-success col-3" onClick={()=>ricarica(stato)}>Ricarica</button>
      </div>
      <button onClick={handlesrollaSopra} className="shadow bnt btn-primary mt-3" ref={ref}>Scorri su</button>
    </section>
  );
};

const Loading= ()=>{
  return(
    <div>
      <h3>Sto Caricando...</h3>
    </div>
  )
}
const Error= ()=>{
  return(
    <div>
      <h3>Errore...</h3>
    </div>
  )
}

export default Utenti;
