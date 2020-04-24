import React from 'react'
import styled from 'styled-components'
const Container = styled.input `
    border:0;
    border:${props=>props.theme.boxBorder};
    border-radius:${props =>props.theme.borderRadius};
    background-color :${props=>props.theme.bgColor};
    height:35px;
    cursor:pointer;
    padding: 0px 15px;
    
`
export default({placeholder,required = true ,type, value, onChange})=>{
    return(
        <Container  placeholder ={placeholder} required={required} type ={type} value ={value} onChange={onChange}/>
    );
}