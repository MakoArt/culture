import React,{useState} from 'react'
import {deportesPreguntas} from '../helpers/DeportesHelper.jsx'
import './Botonera.css'
import styled from '@emotion/styled'
import bueno from '../assets/008863841_prev.mp3'
import malo from '../assets/perder-incorrecto-no-valido.mp3'

const Boton=styled.button`
     width:100%;
     height:70px;
     background-color:#0b5000;
     color:white;
     font-weight:bolder;
     font-style:verdana;
     font-size:20px;

     &:hover{
        background-color:greenyellow;
        color:black;
      }
     

`
const Salir=styled.button`
  
     width:100%;
     height:80px;
     background-color:#0b5000;
     color:white;
     font-weight:bolder;
     font-style:verdana;
     font-size:20px;
     margin-top:13px;

     &:hover{
        background-color:greenyellow;
        color:black;
      }

`

const Imagen=styled.div`

     border:1px;
     height:200px;
     width:100%;
     background-color:green;
    

`
const Container=styled.div`
 background:linear-gradient(90deg,#7a1f1f,#4e0202);
 height:780px;


`

const Botonera = (props) => {   
 
 let[aleatorio,setAleatorio]=useState(Math.round(Math.random()*(100-1)+1))
 let[clase,setClase]=useState(['serpiente','buho','violin','balon','dragon','oso','koi'])
 let[song,setSong]=useState(null)
 
   

  
  
 
    const bien=()=>{
     props.sumar()
     speechSynthesis.speak(new SpeechSynthesisUtterance('¡¡¡RESPUESTA CORRECTA!!!'))
     setSong(song=bueno)
    }
    const mal=()=>{
    props.restar()
    speechSynthesis.speak(new SpeechSynthesisUtterance('¡¡¡RESPUESTA INCORRECTA!!!'))
     setSong(song=malo)
    }

  
   
    
    return (
        <>
           <Container className="container-fluid">
            {deportesPreguntas.map(preguntas=>(
                 
                 preguntas.id===aleatorio ?  
                 
             
               
                
                <>
                
                <Imagen  className={preguntas.estilos==='naturaleza' ? clase[0] : preguntas.estilos==='arte' ? clase[2] : preguntas.estilos==='deportes' ? clase[3] : preguntas.estilos==='viajes' ? clase[4] : preguntas.estilos==='cultura' ? clase[1] : clase[5]}></Imagen>
                
                
                <h3 className="text-center text-white">{preguntas.pregunta}</h3>
                
                <audio src={song} autoPlay></audio>
               
               <Boton  onClick={()=>preguntas.respuesta1===preguntas.solucion ? bien() : mal()} key={preguntas.id}>{[preguntas.respuesta1]}</Boton>
               <Boton  onClick={()=>preguntas.respuesta2===preguntas.solucion ? bien() : mal()}>{[preguntas.respuesta2]}</Boton>
               <Boton  onClick={()=>preguntas.respuesta3===preguntas.solucion ? bien() : mal()}>{[preguntas.respuesta3]}</Boton>
               <Salir  onClick={(()=>{window.location.href='/'})}>SALIR</Salir>
                   
                </>
             
            : null
            
        ))}
           
      
        </Container>
        </>
    )
}

export default Botonera


