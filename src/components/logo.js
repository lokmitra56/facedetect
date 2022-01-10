import React from "react";
import Tilt from 'react-parallax-tilt';
import './logo.css';
import tree from './tree.png';


const Logo = () => {
    return (
    <Tilt className="Tilt tc ba shadow-2 mt0 center" 
          style={{height:'200px', width:'200px'}} 
          scale="1.3" >
    <img className="pt3" alt='pic' src={tree} height={170} width={"auto"}/>
    </Tilt>
        
    );
}  

export default Logo;