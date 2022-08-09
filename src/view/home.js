import React from 'react';
import Lottie from 'react-lottie';
import animation from '../assets/animations/rotate-colors.json';
import SinglePage from '../components/singlePage';
import image from "../assets/image/bgHome.jpg";

const Home = () => {
  return (
    
    <div >
      <SinglePage overlay  img={image} >
        <div className='flex'>
          <h2>Il tuo <span>Tintometro</span></h2>
          
          <div className='lottieHome'>
            <Lottie 
            options={
              {
                loop:true,
                autoplay:true,
                animationData: animation,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }
            }
            width={200}
            height={200}
            />
          </div>
          <h5 id="h5Home">Crea Tutte le sfumature che desideri</h5>
        </div>
       <div>
        <h6 className='h6Home'>vai in tavolozza e crea la tua tabella sfumature</h6>
       </div> 
    </SinglePage>
    
    </div>
  );
}

export default Home;
