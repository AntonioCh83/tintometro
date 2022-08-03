import React from 'react';
import { useParams } from 'react-router-dom';

const GenericoProfilo = () => {
    const {id}=useParams();
  return (
    <div>
     <h3>
     profilo n° {id}
    </h3> 
    </div>
  );
}

export default GenericoProfilo;
