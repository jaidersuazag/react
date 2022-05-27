import React from 'react'

export const UseEffect = () => {
    const[counter,setCounter]=useState(0);

  const handleAdd=()=>{
    setCounter(counter+10);
  }

  const handleSubstract=()=>{
    setCounter(counter-10);
  }

  const handleReset=()=>{
    setCounter(0);
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
