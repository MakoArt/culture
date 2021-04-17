import React,{useState} from 'react'



const BarraVida = (props) => {

    const[cuentaAtras,setCuentaAtras]=useState(localStorage.getItem('vida'))
    
   
    let energia;



    const gameOver=()=>{
     window.location.href='/gameover'
    }
     
    
    
    if(props.restarEnergia===true){
        energia=localStorage.getItem('vida')
         if(energia>=0){
             localStorage.setItem('vida',energia=energia-0.5) 
             }
                else{
                 localStorage.setItem('vida',0)
                 gameOver()
               }

    }
        
  
          
              
         
        
   

    
     
 
    
    const styles={
        width:cuentaAtras==6 ? '100%' : cuentaAtras==5 ? '80%' :cuentaAtras==4 ? '60%' :cuentaAtras==3 ? '40%' :cuentaAtras==2 ? '20%' : cuentaAtras==1 ? '10%' : cuentaAtras==0 ? '0%' : '0%',
        height:30,
        backgroundColor:cuentaAtras==6 ? 'green' : cuentaAtras==5 ? 'green' :cuentaAtras==4 ? 'orange' :cuentaAtras==3 ? 'red' :cuentaAtras==2 ? 'red' : cuentaAtras==1 ? 'red' : cuentaAtras==0 ? 'red' : 'white',
    }
     
  

    
    return (
        <>
     <h2 className="text-center text-white"> ENERGÍA</h2>       
     <div style={styles} className="progressBar"></div>
  
      <div id="sonido"></div> 
      
        </>
    )
}

export default BarraVida
