import React, { useState } from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';



export const UseSate = () => {
  const[counter,setCounter]=useState(0);

  const handleAdd=()=>{
    setCounter(counter+1);
  }

  const handleSubstract=()=>{
    setCounter(counter-1);
  }

  const handleReset=()=>{
    setCounter(0);
  }

  function cambiarColor(){
    let body = document.body;
    body.classList.toggle("oscuro")
  }


  return (
    <div className='botones'>
        <h1 className='numero'>{counter}</h1>
        <hr/>
        <ButtonUI 
         style="btnsum"
         event={handleAdd}
         textButton="Sumar"
        />

        <ButtonUI 
        style="btnreset"
        event={handleReset}
        textButton="Reset"
        />

        <ButtonUI
        style="btnSubstra" 
        event={handleSubstract}
        textButton="Restar"
        />
      
      <ButtonUI
        style="btnSubstra" 
        event={cambiarColor}
        textButton="Tema"
        />

    </div>
  )
}

