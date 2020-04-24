import React from 'react';
import GlobalStyles from "../Styles/GlobalStyles"
import styled,{ThemeProvider } from 'styled-components'
import Theme from '../Styles/Theme';
import Router from './Router'
import Footer from '../Components/Footer'

const Wrapper = styled.div `
    margin: 0 auto;
    max-width: 935px;
    width: 100%;
    position:relative;

`
export default () => (
<ThemeProvider theme={Theme}>
<Wrapper>
<GlobalStyles/>
    <Router isLoggedIn={false}/>
    <Footer />
</Wrapper>
</ThemeProvider>
);