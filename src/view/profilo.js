import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link,Outlet } from 'react-router-dom';

const Profilo = () => {
   
    const navigate=useNavigate();
  return (
    <div className='row'>
      <button className='btn btn-success col-2 offset-1 ' onClick={()=>navigate('/')}>Torna alla home</button>
      <h2 style={{fontVariant:'small-caps'}}>Chi siamo</h2>
        <nav className='d-flex flex-row justify-content-center mx-auto gap-2 mb-2'>
            <Link to={'mio'}>Il mio profilo</Link>
            
        </nav>
        <div>
            <Outlet/>
        </div>
     
    </div>
  );
}

export default Profilo;
