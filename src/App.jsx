import React,{useState} from 'react'
import BarraVida from './components/BarraVida'
import BarraPuntuacion from './components/BarraPuntuacion.jsx'
import Tiempo from './components/Tiempo.jsx'
import Botonera from './components/Botonera.jsx'
import {deportesPreguntas} from './helpers/DeportesHelper.jsx'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import PaginaInicio from './components/PaginaInicio.jsx'
import Deportes from './components/Deportes.jsx'
import Record from './components/Record.jsx'
import GameOver from './components/GameOver.jsx'
import Instrucciones from './components/Instrucciones/Instrucciones.module.jsx'
import './App.css';

//import {BrowserRouter as Router,Link,Route} from 'react-router-dom'





function App() {


   
  
  const[aleatorio,setAleatorio]=useState(Math.round(Math.random()*(9-1)+1))
  let[restarEnergia,setRestarEnergia]=useState(false)
  let[sumarPuntoPartida,setSumarPuntoPartida]=useState(false)
  let[cuentaAtras,setCuentaAtras]=useState(true)
  
  const restar=()=>{
      setRestarEnergia(restarEnergia=true)
      setTimeout(()=>{window.location.reload()},1000)
    
    }

  const sumar=()=>{
    setSumarPuntoPartida(true)
    setTimeout(()=>{window.location.reload()},1000)
    
  }

  const inicia=()=>{
    setCuentaAtras(true)
  }

  
  return (
     <>
    <Router>
 
   
  
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Route path='/gameover' exact>
          <GameOver/>
          </Route>
        </div>
      </div>
      <div className="row">
        <div className="rol">
          <Route path='/instrucciones' exact>
          <Instrucciones/>
          </Route>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <Route path='/' exact>
           <PaginaInicio inicia={inicia}/>
        </Route>
        </div>
      </div>
      <div className="row">
        <div className="col justify-content-center">
         <Route path='/preguntas'>
          <BarraVida 
           restarEnergia={restarEnergia} />
          </Route>
        </div>
      </div>
      <div className="row">
      <div className="col">
      <Route path='/preguntas'>
        <BarraPuntuacion
          sumarPuntoPartida={sumarPuntoPartida}/>
      </Route>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Route path='/preguntas'>
         <Record/>
        </Route>
        
      </div>
    </div>
    <div className="row">
      <div className="col">
      <Route path='/preguntas'>
        <Tiempo cuentaAtras={cuentaAtras}/>
        </Route>
      </div>
    </div>
   
    <div className="row">
      <div className="col">
      <Route path='/preguntas'>
        <Botonera  restar={restar} sumar={sumar} />
      </Route>
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
   
    </Router>
     </>
  );
}

export default App;
