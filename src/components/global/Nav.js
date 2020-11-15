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
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: center;
      display: flex;
      

      span{
        display: flex;
        flex-direction: column;
        justify-content: center;
        vertical-align: center;
        text-align: center;

        
        a {
          color: var(--G400);
          font-size: 0.8rem;
          font-family: var(--ff-primary);
          font-weight: 600;

          position: relative;
          display: inline-block;
          text-decoration: none;

          &::after {
            position: absolute;
            left: 0;
            content: '';
            width: 100%;
            height: 1px;
            background: var(--G400);
            transform: scale(0, 1);
            transition: transform .3s;
            margin-top: 0.9rem ;
            transform-origin: center top;  
          }

          &:hover::after {
              transform: scale(1, 1);
            }
        }
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
