import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react'

const CatBox = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
    flex-direction: column;
`

const CatCard = {
    height: 'auto',
    padding: '2px',
    border: '1px solid black',
    backgroundImage: `url(${props => props.catUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}

const ButtonBox = styled.div `

`
    
const CatDetail = (props) => {   
    return (
        <CatBox>
            <div>
                <img src={props.catUrl} style={CatCard} /> 
            </div>
        <ButtonBox>
            <Button 
            icon 
            labelPosition='left'
            // onClick={props.fetchCats}
            >
                Prev
                <Icon name='left arrow' />
            </Button>    
            <Button 
            icon 
            labelPosition='right'
            onClick={props.fetchCats}
            >
                Next
                <Icon name='right arrow' />
            </Button>
        </ButtonBox>    
    </CatBox>    
    )
};

export default CatDetail;