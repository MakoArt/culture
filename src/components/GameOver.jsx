import React from 'react'
import {Link} from 'react-router-dom'
import styled from '@emotion/styled'
import './GameOver.css'
import music from '../assets/010804258_prev.mp3'


const Boton=styled.button`

     margin-top:100px;
     width:100%;
     height:70px;
     background-color:#0b5000;
     color:white;
     font-weight:bolder;
     font-style:verdana;
     font-size:20px;
    

     &:hover{
        background-color:greenyellow;
        color:'white';
      }
     
  

`





const GameOver = () => {

  const styles={
     
      width:'100%',
      height:1300,
      backgroundColor:'#741111'
  }
   
  const LinkStyles={
       textDecoration:'none',
       color:'black'
  }

    return (
        <>
    
    <div style={styles} className="fondo">
           
    <audio src={music} autoPlay></audio>
    <h1 className="text-center text-white display-2">¡¡¡HAS PERDIDO!!!</h1>
      <div className="imagen"></div>
   
          
     <Boton><Link style={LinkStyles}to='/'>VUELVE A INTENTARLO</Link></Boton>
          
          
      </div>      
        
        
         
        
        
        </>
    )
}

export default GameOver
