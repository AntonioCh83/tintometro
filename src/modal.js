import React from 'react';

const modal = ({modalContent,modalState,modalfunction}) => {
  return (
    <section className={`modal-section ${modalState?'show-modal':''}`}>
        <div className='container modal-content'>
            <h4>
                {modalContent||'modal1'}
            </h4>
            <button onClick={modalfunction} className='button delete-button col-4 offset-4'>cancella</button>

        </div>
      
    </section>
  );
}

export default modal;
