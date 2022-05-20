import React from 'react'

export const ButtonUI = ({style,event,textButton}) => {
  return (
    <button onClick={event} className={style}>{textButton}</button>
  )
}

