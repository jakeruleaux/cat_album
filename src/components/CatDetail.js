import React from 'react';
import styled from 'styled-components';

const CatBox = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`

const catCard = {
    width: '50%',
    height: 'auto',
    border: '1px solid black',
    backgroundImage: `url(${props => props.catUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}
    
const CatDetail = (props) => {   
    return (
        <CatBox>
            <img src={props.catUrl} style={catCard} /> 
        </CatBox>
    )
};

export default CatDetail;