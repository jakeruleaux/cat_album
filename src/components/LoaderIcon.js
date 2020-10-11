import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const LoaderIcon = () => {
    return (
        <div>
            <Loader active inline='centered' />
        </div>
    )
}

export default LoaderIcon;