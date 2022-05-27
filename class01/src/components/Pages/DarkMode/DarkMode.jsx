import React, { useEffect, useState } from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';

export const DarkMode = () => {

    const[modeDark,setModeDark] = useState(false);    
    const[title,setTitle] = useState('Dark Mode');

    const handleOn = () =>{
        setModeDark(!modeDark);
    }

    useEffect(()=>{
        if(modeDark){
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else{
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    },[modeDark])


  return (
    <div className='container-dark'>
        <h2>ModoDark</h2>
        <ButtonUI textButton="ON" event={handleOn} style="buttonMode"/>
    </div>
  )
}
