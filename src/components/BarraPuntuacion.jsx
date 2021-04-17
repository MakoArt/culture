import React,{useState} from 'react'
import styled from '@emotion/styled'


const BarraPuntuacion = (props) => {

    const styles={
        width:'100%',
        height:40,
        backgroundColor:'black',
        color:'green',
        fontSize:30
    }

    let[puntuacionInicial,setPuntuacionInicial]=useState(parseInt(localStorage.getItem('puntuacion')))
    
   
    
   if(props.sumarPuntoPartida===true){
        
          localStorage.setItem('puntuacion',puntuacionInicial=puntuacionInicial + 1)
    
        
    }
    
    
    return (
        <>
        <div className="container-fluid">
        <h2 className="text-center text-white">PUNTUACIÒN</h2>
        <div style={styles} className="barraPuntuacion text-center">{puntuacionInicial}</div>
        </div>   
        </>
    )
}

export default BarraPuntuacion
