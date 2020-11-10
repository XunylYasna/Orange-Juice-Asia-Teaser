import React from "react"
import styled from "styled-components"


import manifest from "../../static/manifest.json"
import { FaFacebookSquare, FaSpotify, FaSoundcloud } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"

export default function Footer(props) {

    return (
        <FooterContainer>
            <div className="socials-icons">
                <a href={manifest.social.instagram}><AiFillInstagram /></a>
                <a href={manifest.social.facebook}><FaFacebookSquare /></a>
                <a href={manifest.social.soundcloud}><FaSoundcloud /></a>
                <a href={manifest.social.spotify}><FaSpotify /></a>
            </div>

            <div className="socials-email">
                {props.email ? <span><a href={"mailto:" + manifest.social.email} target="_blank">{manifest.social.email}</a></span> : <div></div>}

            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    height: 15vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    vertical-align: middle;
    padding: 0vh 5vw;
    flex-wrap: wrap;

    div{
        height: 15vh;
        padding-top: 5vh;
        @media (max-width: 380px) {
            height: 7.5vh;
            padding-top: 0vh;

        }
        flex-direction: column;
        justify-content: center;
    }

    div.socials-icons{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        font-size: 2rem;
        a{
            margin-right: 15px;
            color: var(--G400);
            transition: all 0.5s ease-in-out;
        }
        a:hover{
            color: var(--G300);
            font-size: 3rem;
        }
    }

    div.socials-email{
        display: flex;
        align-items: flex-start;
        margin-top: -1vh;
        span{
            border-bottom: 1px solid var(--G400)
        }
        a{
            font-family: var(--ff-primary);
            font-weight: 600;
            font-size: 0.8rem;
            color: var(--G400);
            text-decoration: none;
            padding-left: 5px;
            padding-right: 5px;
        }
    }
`