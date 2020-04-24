import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
    width:100%;
    background-color:${props=>props.theme.blueColor};
    color:white;
    border-radius:${props=>props.theme.borderRadius};
    font-weight:600;
    font-size:14px;
    padding: 7px 0px;
`
export default({text}) =>{
    return(
        <Button>
            {text}
        </Button>
    );
}