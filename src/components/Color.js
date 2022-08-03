import React,{useState,useEffect} from "react";
import { rgbToHex } from "../utils/funcHelpers";

const Color=({rgb})=>{
    const [message,setMessage]=useState(false);
    const copiaColore=()=>{
        navigator.clipboard.writeText(rgbToHex(...rgb))
        .then(()=>setMessage(true))
        .catch(err=>console.log(err))
    };
    useEffect(()=>{
       const timer= setTimeout(() => {
            setMessage(false);
        }, 2000);
        return ()=>clearTimeout(timer)
    },[message]);
    return(
        <article

            onClick={copiaColore}
            id="color" 
            className="card shadow m-4" 
            style={{backgroundColor: rgbToHex(...rgb) } }>
                <h4>{rgbToHex(...rgb)}</h4>
                {
                    message ? <p>copiato</p>:''
                }
        </article>
    )

}

export default Color;