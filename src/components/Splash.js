import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import pentagram from '../images/pentagram.png';

const albumCover = {
    width: '600px',
    height: '600px',
    border: '1px solid black',
    backgroundImage: `url(${pentagram})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: '#303030',
    textAlign: 'center'
}

const bandTitle ={
    textShadow: '0 0 10px red'
}    
const albumTitle = {
    textShadow: '0 0 10px red',
    marginTop: '50%'
}

const pentagramStyle = {
    width: '500px'
}

const Splash = () => {
    return(
        <div>
            <Grid celled='internally'>
                <Grid.Row>
                <Grid.Column width={3}>
                </Grid.Column>
                <Grid.Column width={10}>
                    <div style={albumCover}>
                        <h1 style={bandTitle}>kittens from Hell</h1>
                        <h1 style={albumTitle}>the CAT Album</h1>
                    </div>
                </Grid.Column>
                <Grid.Column width={3}>
                </Grid.Column>
                </Grid.Row>
            </Grid>    
        </div>
    )
}

export default Splash;