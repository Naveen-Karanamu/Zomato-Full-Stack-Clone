import React from 'react'

export const NextArrow = (props) => {
  return (
    <div className={props.className} style={{...props.style, borderRadius:"100px", border:"20px", borderColor:"#e23744", backgroundColor:"gray"}} onClick={props.onClick}/>
  )
}

export const PrevArrow = (props) => {
    return (
      <div className={props.className} style={{...props.style, borderRadius:"100px", border:"20px", borderColor:"#e23744", backgroundColor:"gray"}} onClick={props.onClick}/>
    )
  }
