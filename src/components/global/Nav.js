import React from "react"

import styled from "styled-components"

export default function Nav(props) {

  return (
    <NavWrapper>
      <div><h1>{props.title}</h1></div>
      <div>{props.children}</div>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0vh 5vw;

  div{
    display: flex;
    h2{
      vertical-align: middle;
      align-self: center;
      transition: letter-spacing 0.5s ease-in-out;
      
      
      span{
        padding-bottom: 0.2rem;
        border-bottom: 1px solid var(--G300);
      }
      a{
        transition: all 0.5s ease-in-out;

        font-family: var(--ff-primary);
        font-weight: 600;
        font-size: 0.8rem;
        color: var(--G300);
        text-decoration: none;
        padding-left: 15px;
        padding-right: 15px;
      }
    }

    h2:hover{
      a{
        transition: all 0.5 ease-in-out;

        letter-spacing: 2px;
        /* padding-left: 30px; */
      }
    }

    h1{
      vertical-align: middle;
      align-self: center;
      font-family: var(--ff-primary);
      font-weight: 600;
      font-size: 0.8rem;
    }
  }
`
