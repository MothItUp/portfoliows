import React from 'react'
import styled from 'styled-components';

export default function Skills() {
    return (
        <SkillsStyled id='about'>

            <div className="bar">
                <div className='info'>
                    <p>HTML</p>
                </div>
                <div className="skills html">
                    <span>0.90</span> 
                </div>
                <div className='info'>
                    <p>CSS</p>
                </div>
                <div className="skills css">
                    <span>0.55</span> 
                </div>
                <div className='info'>
                    <p>Javascript</p>
                </div>
                <div className="skills js">
                    <span>0.70</span>
                </div>
                <div className='info'>
                    <p>PHP</p>
                </div>
                <div className="skills php">
                    <span>0.60</span> 
                </div>
            </div>

        </SkillsStyled>
    )
}

window.addEventListener('scroll', reveal);

function reveal() {
    var revealHTML = document.querySelector('.html');
    var windowheight = window.innerHeight;
    var revealtop = revealHTML.getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint) {
        revealHTML.classList.add('HTMLactive');
    }

    else{
        revealHTML.classList.remove('HTMLactive');
    }
    
}

const SkillsStyled = styled.nav `
    width: 100%;
    height: 100vh;
    background-color: var(--background-dark-color);

    .bar{
        width: 80%;
        margin: 0 auto;
        padding: 10% 15px;
        span{
            opacity: 0;
            animation: showText 0.4s 1.1s linear forwards;
        }
    }

    @keyframes showText{
        100%{
            opacity: 1;
        }
    }

    .skills {
        text-align: right;
        padding: 10px;
        color: var(--white-color);
        background: var(--red-color);
        border-radius: 5px; 
        transform: scaleX(0);
        transform-origin: left;
    }

    @keyframes animate {
        100%{
            transform: scaleX(1);
        }
    }

    .html {
        
    }

    .HTMLactive{
            width: 90%;
            animation: animate 1s 0.1s ease-in-out forwards;
        }

    .css {
        width: 80%;
        animation: animate 1s 0.2s ease-in-out forwards;
    }

    .js {
        width: 65%;
        animation: animate 1s 0.3s ease-in-out forwards;
    }

    .php {
        width: 60%;
        animation: animate 1s 0.4s ease-in forwards;
    }
`;