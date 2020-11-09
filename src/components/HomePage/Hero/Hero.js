import React from "react"
import styled from "styled-components"


import logoGraphic from "../../../assets/logos/Black.gif"

export default function Hero() {
  return (
    <Landing>
      <img src={logoGraphic} draggable={false}></img>
    </Landing>
  )
}

const Landing = styled.section`
  background-color: var(--color-primary);
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
      height: 128px;
      width: 128px;
  }
`
