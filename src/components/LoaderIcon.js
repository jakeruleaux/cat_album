import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const LoaderIcon = () => {
    return (
        <div>
            <Segment>
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>
            </Segment>
        </div>
    )
}

export default LoaderIcon;