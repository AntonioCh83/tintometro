import React, {useState} from "react";
import {FaBars} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Header = ()=>{
    const [show,setShow]=useState(false);
    return(
        <nav className='nav d-flex flex-row justify-content-around mx-auto gap-2 mb-2'>
            <header className='nav-header'>
                <div className='nav-brand'>
                    <img className='rounded shadow nav-logo' id='logo' src='MAcre7.png' alt='logo' />
                    <h4>MAcre</h4>
                </div>
                <div>
                    <button className='btn nav-toggler'><FaBars className='nav-icon' onClick={()=>setShow(!show)}/></button>
                </div>
            </header>
                <div className={`${show?'links-container show':'links-container'}`}>
                    <ul className='nav-links'>
                <Link className='nav-link ' to='/tavolozza'>
                    Tavolozza
                </Link>
                <Link className='nav-link' to='/profilo'>
                    Chi siamo
                </Link>
                    </ul>

                </div>
        </nav>
    )
}
export default Header;