import React, {useState} from 'react';
import styled, { keyframes } from 'styled-components';
import pentagram from '../images/pentagram.png';
import fire from '../images/fire.jpg';
import kitten1 from '../images/kitten1.png';
import kitten2 from '../images/kitten2.png';
import kitten3 from '../images/kitten3.png';

const fade = keyframes`
    0% {opacity: 1;}
    100% {opacity: 0;}
    `

const osculate = keyframes`
    0% {opacity: 1;}
    100% {opacity: 0;}
`    

const BackDrop = styled.div `
    height: 100%;
    width: 100%;
    background-image: url(${fire});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    animation: ${fade} 2s ease-in-out;
    animation-delay: 5s;
    z-index: 10;
`

const albumCover = {
    width: '600px',
    height: '600px',
    border: '1px solid black',
    backgroundImage: `url(${pentagram})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: '#303030',
    textAlign: 'center',
    margin: '0 auto'
}

const bandTitle = {
    textShadow: '0 0 10px red'
}    
const albumTitle = {
    textShadow: '0 0 10px red'
}

const kitten1Img = {
    backgroundImage: `url(${kitten1})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '180px',
    flex: '1'
}

const kittenContainer = {
    display: 'flex'
}

const kitten2Img = {
    backgroundImage: `url(${kitten2})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '150px',
    flex: '1'
}

const kitten3Img = {
    backgroundImage: `url(${kitten3})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '160px'
}

const Laser1 = styled.div `
    width: 200px;
    height: 2px;
    background-color: #FF1493;
    transform: rotate(32deg) translate(90px, -43px);
    animation: ${osculate} 1s ease-in-out;
    animation-iteration-count: infinite;
`

const Laser2 = styled.div `
    width: 200px;
    height: 2px;
    background-color: #FF1493;
    transform: rotate(317deg) translate(216px, 191px);
    animation: ${osculate} 1s ease-in-out;
    animation-iteration-count: infinite;
`
const Laser3 = styled.div `
    width: 200px;
    height: 2px;
    background-color: #FF1493;
    transform: rotate(35deg) translate(83px,-56px);
    animation: ${osculate} 1s ease-in-out;
    animation-iteration-count: infinite;
    animation-delay: .5s
`
const Laser4 = styled.div `
    width: 200px;
    height: 2px;
    background-color: #FF1493;
    transform: rotate(314deg) translate(208px,194px);
    animation: ${osculate} 1s ease-in-out;
    animation-iteration-count: infinite;
    animation-delay: .5s
`

const Splash = () => {
    const [fade, setFade]  = useState();

    setTimeout(() => {
        setFade({
        fade: true
        });
    }, 7000);

    return(
        <BackDrop style={{display: fade ? 'none' : 'block' }}>
            <div style={albumCover}>
                <h1 style={bandTitle}>kittens from Hell</h1>
                <div style={kitten3Img}>
                    <Laser1 />
                    <Laser2 />
                    <Laser3 />
                    <Laser4 />
                </div>    
                <div style={kittenContainer}>
                    <div style={kitten1Img} />
                    <div style={kitten2Img} />
                </div>
                <h1 style={albumTitle}>the CAT Album</h1>
            </div>
        </BackDrop>
    )
}

export default Splash;