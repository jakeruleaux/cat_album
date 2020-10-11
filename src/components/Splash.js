import React from 'react';
import pentagram from '../images/pentagram.png';
import fire from '../images/fire.jpg';
import kitten1 from '../images/kitten1.png';
import kitten2 from '../images/kitten2.png';
import kitten3 from '../images/kitten3.png';

const backDrop = {
    height: '100%',
    width: '100%',
    backgroundImage: `url(${fire})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    paddingTop: '100px',
    paddingBottom: '100px'
}

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

const laser1 = {
    width: '200px',
    height: '2px',
    backgroundColor: '#FF1493',
    transform: 'rotate(32deg) translate(90px, -43px)'
}

const laser2 = {
    width: '200px',
    height: '2px',
    backgroundColor: '#FF1493',
    transform: 'rotate(317deg) translate(216px, 191px)'
}

const Splash = () => {
    return(
        <div style={backDrop}>
            <div style={albumCover}>
                <h1 style={bandTitle}>kittens from Hell</h1>
                <div style={kitten3Img}>
                    <div style={laser1} />
                    <div style={laser2} />
                </div>    
                <div style={kittenContainer}>
                    <div style={kitten1Img} />
                    <div style={kitten2Img} />
                </div>
                <h1 style={albumTitle}>the CAT Album</h1>
            </div>
        </div>
    )
}

export default Splash;