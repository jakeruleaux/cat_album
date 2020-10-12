import React from 'react';
import styled from 'styled-components';

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
    margin-left: 5px;
    margin-right: 5px;
`
    
const CatDetail = (props) => {   
    
    return (
        <CatBox>
            <div>
                <img src={props.catUrl} style={CatCard} /> 
            </div>
        </CatBox>    
    )
};

export default CatDetail;