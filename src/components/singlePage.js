import React from "react";
import sfondoDefault from '../assets/image/defaultSfondo.jpg';

const SinglePage=({children,img,overlay})=>{
    const image= img ? img : sfondoDefault;
    return(
        
        <div className="singlePage"
            style={{
                background:`url(${image})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat'
            }}
        >
            {console.log(sfondoDefault)}

            <div className={`${overlay?'overlay':''}`}>
                <div>
                    {children}
                </div>
            </div>
        </div>

    
    );


};

export default SinglePage;