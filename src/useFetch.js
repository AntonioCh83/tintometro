import {useState,useEffect} from 'react';
import axios from 'axios';

const useFetch=(url)=>{
    const [dati,setDati] = useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [isError,setIsError]=useState(false);

    const tempLOading=()=>{
        setTimeout(() => {
          setIsLoading(false)
        }, 500);
      }
      
     

    useEffect(()=>{
         (async ()=>{
            setIsError(false);
            setIsLoading(true);
            try {
              const response=await axios.get(url);
              setDati(response.data); 
            } catch (error) {
                console.log(error);
                setIsError(true);
            }
            tempLOading();
          })();
        return ()=> clearInterval(tempLOading);
      }, [url]);

      return {isError,isLoading,dati,setDati};
}

export default useFetch;