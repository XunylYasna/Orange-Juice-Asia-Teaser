import React, { createRef } from "react"
import styled from "styled-components"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Form = () => {

  const messageRef = createRef(null)

  const submitForm = (e) => {
    e.preventDefault()
    messageRef.current.className = "message show"
  }

  return (
    <FormContainer>
      <form
        name="contact"
        method="POST"
        action="/login"
        onSubmit={submitForm}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <h1>Staff Login</h1>
        <div className="form-fields">
          <div className="field-wrapper">
            <input type="text" name="username" placeholder="username" />
            <label>Username</label>
          </div>
          <div className="field-wrapper">
            <input type="password" name="password" placeholder="password" />
            <label>Password</label>
          </div>
          <p className="message" ref={messageRef}>*Invalid Username and Password</p>
          <div className="field-wrapper">
            <input type="submit" />
          </div>
        </div>
      </form>
      <div className="form-link">
        <span>
          <AniLink paintDrip to="/" duration={1} hex="#000">
            Take me back I'm not cool enough
          </AniLink>
        </span>
      </div>
    </FormContainer>
  )
}

const FormContainer = styled.section`
  height: 75vh;
  display: flex;
  flex-direction: column;
  
  .form-link{
    max-width: 250px;
    display: flex;
    margin: auto;
    margin-top: 0;
    flex-direction: column;
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
  form{
    max-width: 250px;
    display: flex;
    margin: auto;
    padding-top: 10vh;
    flex-direction: column;
    h1{
      font-family: var(--ff-primary);
      font-weight: 600;
      font-size: 0.8rem;
    }

    .message{
      opacity: 0;
      margin-top: -25px;
      padding: 15px;
      font-family: var(--ff-primary);
      font-size: 0.7rem;
      color: var(--G400);
    }

    .message.show{
      opacity: 1;
    }

    .form-fields{
      margin-top: 5vh;
      .field-wrapper{
        margin-bottom: 3vh;
        position: relative;

        label{
          position: absolute;
          pointer-events: none;
          font-size: 0.85em;
          top: 40%;
          left: 0;
          transform: translateY(-50%);
          transition: all ease-in 0.25s;
          color: var(--G400);
          font-family: var(--ff-primary);
          font-weight: 300;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active  {
            -webkit-box-shadow: 0 0 0 30px var(--color-primary) inset !important;
        }
        input[type="text"], input[type="password"], input[type="submit"], textarea{
          -webkit-appearance: none;
          appearance: none;
          &:focus{
            outline: none;
          }
        }
        input[type="text"], input[type="password"], textarea{
          width: 100%;
          border: none;
          background: transparent;
          line-height: 2em;
          border-bottom: 1px solid var(--G400);
          color: var(--G400);

          &::-webkit-input-placeholder{
            opacity: 0;
          }
          &::-moz-placeholder{
            opacity: 0;
          }
          &:-ms-input-placeholder{
            opacity: 0;
          }
          &:-moz-placeholder { 
            opacity: 0;
          }
          &:focus, &:not(:placeholder-shown){
            + label{
              top: -35%;
              color: var(--G400);
            }
          }
        }
        input[type="submit"]{
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
          width: 100%;
          background: var(--G400);
          line-height: 2em;
          color: var(--color-primary);
          border: 1px solid var(--color-primary);
          border-radius: 0.3rem;
          padding: 20px/4;
          
          &:hover{
            opacity: 0.8;
          }
          &:active{
            transform: scale(0.96);
          }
        }
      }
    }
  }
  
`

export default Form
