import React,{useState} from 'react'
import GameOver from './GameOver'

const Tiempo = (props) => {
 
    const styles={
        width:'100%',
        height:40,
        backgroundColor:'black',
        color:'green',
        fontSize:30
    }

   
  

   let[time,setTime]=useState(1000)

   const fueraDeTiempo=()=>{
    window.location.href='/gameover'
   }
   
   const atras=()=>{
      if(time>0)
      setTime(time=time-1)
      if(time<1)
      fueraDeTiempo()
    }
    window.requestAnimationFrame(atras,1000) 

 
   
   

        
    
     
  
   

    return (
        <>
      
        <h2 className="text-center text-white">TIEMPO</h2>
        <div style={styles} id="tiempo" className="tiempo text-center">{time}</div>
        </>
    )
}

export default Tiempo
