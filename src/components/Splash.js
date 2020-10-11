import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const Splash = () => {
    return(
        <div>
            <Grid celled='internally'>
                <Grid.Row>
                {/* <Grid.Column width={3}>
                </Grid.Column> */}
                <Grid.Column width={10}>
                    <Image src='' />
                </Grid.Column>
                {/* <Grid.Column width={3}>
                </Grid.Column> */}
                </Grid.Row>
            </Grid>    
        </div>
    )
}

export default Splash;