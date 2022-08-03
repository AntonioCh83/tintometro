import React from 'react';
import Lottie from 'react-lottie';
import animation from '../assets/animations/error-animation.json';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Page not found</h1>
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
      width={400}
      height={400}
      ></Lottie>
      <button className='btn btn-success' onClick={()=>navigate('/')}>Torna alla home</button>
    </div>
  );
}

export default ErrorPage;
