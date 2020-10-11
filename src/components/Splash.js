import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import pentagram from '../images/pentagram.png';
import fire from '../images/fire.jpg';
import record from '../images/record.png';

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

const albumContainer = {

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
    display: 'table',
    margin: '0 auto'
}

const bandTitle = {
    textShadow: '0 0 10px red'
}    
const albumTitle = {
    textShadow: '0 0 10px red',
    marginTop: '55%'
}

const recordImage = {
    height: '600px',
    width: '290px',
    backgroundImage: `url(${record})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}


// const pentagramStyle = {
//     width: '500px'
// }

const Splash = () => {
    return(
        <div style={backDrop}>
            <div style={albumContainer}>
                <div style={albumCover}>
                    <h1 style={bandTitle}>kittens from Hell</h1>
                    <h1 style={albumTitle}>the CAT Album</h1>
                </div>
                <div style={recordImage} />
            </div>
        </div>
    )
}

export default Splash;