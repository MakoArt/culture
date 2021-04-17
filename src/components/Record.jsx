import React from 'react'



 

const Record = (props) => {
   
   
//let[newRecord,setNewRecord]=useState(localStorage.getItem('newRecord'))
   
    
    const styles={
        width:'100%',
        height:40,
        backgroundColor:'black',
        color:'green',
        fontSize:30
    }

    let puntuacion=localStorage.getItem('puntuacion')
    let newRecord=localStorage.getItem('newRecord')


 
     puntuacion>=newRecord ? localStorage.setItem('newRecord',puntuacion) : localStorage.setItem('newRecord',newRecord)
         
    
   
     
    return (
        <>
     
       <h2 className="text-center text-white">RECORD</h2>
        <div style={styles} className="barraPuntuacion text-center">{newRecord}</div>

        </> 
    
    )
}

export default Record
