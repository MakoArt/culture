import React,{useRef} from 'react'
import styled from '@emotion/styled'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import  './Instrucciones.css'
import imagen from '../../assets/coy-5135969.png'

const Botones=styled.button`
 
      width:100%;
      height:90px;
      box-shadow:9px 9px 9px 10px black;
      margin-top:3px;
      background-color:#0b5000;
      color:white;
      font-weight:bolder;
      font-style:'verdana';
      font-size:22px;
      animation:color 2s  linear infinite;
      
      &:hover{
        background-color:greenyellow;
        color:black;
      }
      &:active{
       
      }
      @keyframes color{
          0%{
              background-color:#0b5000;
          }
          100%{
              background-color:#0d8327;
              color:black;
          }
      }

`


const Container=styled.div`
 
 background-color:#7a1f1f;
 height:1200px;
`

const BotonesSin=styled.button`
 
      width:100%;
      height:90px;
      box-shadow:9px 9px 9px 10px black;
      margin-top:3px;
      background-color:#0b5000;
      color:white;
      font-weight:bolder;
      font-style:'verdana';
      font-size:22px;
      text-decoration:none;
      list-style:none;
     
      &:hover{
        background-color:greenyellow;
        color:black;
      }
      
`

const H3=styled.h3`
   
   text-decoration:none;
   list-style:none;
 

`
const Imagen=styled.img`

 width:100%;

`
const Instrucciones = () => {


const parrafo=useRef()

const Parrafo={

    color:'black',
    marginTop:30,
    fontSize:20,
  
    fontWeight:'bolder',
    
}
const styles={
    textDecoration:'none',
    listStyle:'none',
    color:'black',
    


}
    
   
     



       
        
    return (
        
        <Container className="container">
            
      <Botones>INSTRUCCIONES</Botones>
      
       <div className={styles.containerParrafo}>
       <div className={styles.imagenFondo}></div>
       <p style={Parrafo} className="display-2" ref={parrafo}>Bienvenido a  Culture , pulsa empezar y automáticamente , entrarás en el modo de juego , como podrás ver verás una serie de marcadores en el siguiente orden, energía, puntuación de la sesión actual , record personal y el tiempo , tendrás que pulsar el botón correspondiente que será el resultado , a la pregunta que sale en la parte superior, hay dos formas de perder , que la barra de energía se agote , o que tu tiempo se agote, el tiempo se recarga  una vez que aciertes o falles.</p>
       <Imagen src={imagen}  alt="image"/>
       </div>
      <BotonesSin><Link to='/preguntas' style={styles}  className="no" ><h3>EMPEZAR</h3></Link></BotonesSin>
      <BotonesSin><Link to='/' style={styles}  className="no"><H3>SALIR</H3></Link></BotonesSin>
     
     </Container>
    )
}

export default Instrucciones
