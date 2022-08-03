import React,{useState,useEffect} from 'react';
import {v4 as uuid} from 'uuid';
import { useNavigate } from 'react-router-dom';
import Values from 'values.js';
import Color from '../components/Color';
import sfondo from '../assets/image/defaultSfondo.jpg';
import sfondoTavolozza from '../assets/image/background-tavolozza2.jpg'

const Tavolozza = () => {
    const navigate=useNavigate();

    const [inputColori,setinputColori]= useState({
      sfumatura: 10 ,
      colore: ''
    });
    const [coloreSelezionato,setColoreSelezionato]=useState([]);
    const [error,setError]=useState(false);

    const handlerChange=(e)=>{
      if(error)setError(false);
      const {name,value}= e.target;
      setinputColori({...inputColori,[name]:value})
    }
    const handlerSubmit=(e)=>{
      if(inputColori.colore && inputColori.sfumatura){
        try {
          e.preventDefault();
        const {colore,sfumatura}= inputColori;
        setColoreSelezionato(new Values(colore).all(Math.round(100/parseInt(sfumatura,10))*2));
        setinputColori({colore:'',sfumatura:10}) 
        } catch (error) {
          setError(true);
        }
      }
    }

    const handlerHelpColor=()=>{
        const aiutoColore=document.getElementById('aiutoColore');
        const valoreColore=aiutoColore.value;
        setinputColori({...inputColori,colore:valoreColore})

    }

    useEffect(() => {
      setinputColori({colore:'#00ff00',sfumatura:10})
      setColoreSelezionato(new Values('#00ff00').all(Math.round(100/10)*2))
    }, []);
  return (
      <>
    <div className='d-flex sfondoNavigazione' style={{background:`url(${sfondo})`}}>
      <button className='btn btn-success col-md-2 offset-lg-1 col-sm-5 ' onClick={()=>navigate('/')}>Torna alla home</button>
    </div>
    
      <div className=' my-3'>
          <label for='aiutoColore'>Colore di aiuto</label>
          <input id='aiutoColore' type={'color'} onChange={handlerHelpColor} ></input>  
      </div>

        <div className='m-auto'  >
          <form onSubmit={handlerSubmit}>
          <div className='form-group col-12'>
          <label for='sfumatura'>n°Sfumature</label>
          <input 
          className='form-control border-bottom'
          onChange={handlerChange}
          type="number"
          max={100}
          min={5}
          step={5}
          value={inputColori.sfumatura}
          name="sfumatura"
          id='sfumatura'
          >
          </input>
          </div>

          <div className='form-group col-12'>
          <label for='colore'>Colore</label>
          <input 
          className='form-control'
          onChange={handlerChange}
          type="text"
          name="colore"
          id='colore'
          value={inputColori.colore}
          aria-describedby='description'
          />
         <small id='decription' className='form-text text-muted'>inserisci in hex o rgb</small>
          </div>
          <div className='form-group col-12'>
            <button id='btnCreaColore' type='submit'>Crea Tavolozza</button>
          </div>
          </form>
        </div>

      
    <section className='containerF sfondoTavolozza' id='tabellaColori' style={{background:`url(${sfondoTavolozza})`}}>
      {
      error?( <h4>Inserisci un colore corretto</h4>):
      coloreSelezionato?(
      coloreSelezionato.map(el=> <Color key={uuid()} {...el}></Color>))
      :(<div>Attendi...</div>)
      }
    </section>
     
      </>
  );
}

export default Tavolozza;
