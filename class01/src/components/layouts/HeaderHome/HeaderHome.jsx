import React from 'react'
import { DarkMode } from '../../Pages/DarkMode/DarkMode';
import { Logo } from '../../UI/Logo/Logo';
import { NavHome } from '../../UI/NavHome/NavHome';

export const HeaderHome = () => {
  return (
      <div className='contenedor'>
         <Logo/> 
         <NavHome/>
         <DarkMode/>
      </div>
  )
}
