import React ,{useState,useRef} from 'react'
import styled from '@emotion/styled'
import './PaginaInicio.css'
import musica from '../assets/street-fighter.mp3'


const Botones=styled.button`
 
      width:100%;
      height:70px;
      margin-top:3px;
      background-color:#0b5000;
      color:white;
      font-weight:bolder;
      font-style:'verdana';
      font-size:22px;
      
      &:hover{
        background-color:greenyellow;
        color:black;
      }

`

const Container=styled.div`
 
 background-color:#7a1f1f;
 height:1000px;

`




const PaginaInicio = (props) => {

 const audioRef=useRef()
  

  //Estilos en linea******************
  
  const contBotonesStyle={
       height:50,
       display:'block',
       width:'100%',
       marginTop:400
  
  }

   
  
  const[inicia,setInicia]=useState(false)
  
  
  
   
  
 
  
  
  
   
 
  //************************************************** */

   
    
       
    let puntuacion;
    
    const despegandoAplicacion=()=>{
        
        setInicia(true)
        window.location.assign('/preguntas')
        localStorage.setItem('vida',6)
        localStorage.setItem('puntuacion',0)
   
        props.inicia()
    }

    
    
     const informacion=()=>{
      window.location.href='/instrucciones'
     } 
    
     
   
  
    return (
      <>
      
     

        <Container  className="container-fluid justify-content-center">
           <div className="row justify-content-center">
         
          <div className="logo"></div>
          <h1 className="text-center text-white display-2">CULTURE</h1>
           <audio className="audio" src={musica}  ref={audioRef} autoPlay loop></audio>
           <div className="col-1">
          <div  className="img"></div>
          </div>
         <div style={contBotonesStyle} className="contenedorBotones">
        <Botones   onClick={informacion}>INSTRUCCIONES</Botones>
        <Botones   onClick={despegandoAplicacion}>EMPIEZA</Botones>  
        </div>
      </div>
     
        
     </Container>
   </>
    )
}

export default PaginaInicio
