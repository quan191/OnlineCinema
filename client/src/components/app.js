import React from 'react'
import Watch from './watch'
import Vod from './vod'
import {Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import {borderColor, headerHeight, containerMaxWidth} from "./theme";
const AppWrapper = styled.div `
   
`;

const Container = styled.div `
    max-width: ${containerMaxWidth}px;
    margin: 0 auto;
`
const Header = styled.div `
      
        height: ${headerHeight}px;
        border-bottom: 1px solid ${borderColor};
`

const Main = styled.div `
    padding: 20px 0;
    
`
const HeaderWrapper = styled.div `
    display: flex;
    
`
const HeaderTitle = styled.div `
    font-size: 35px;
    font-weight: 800;
    line-height: ${headerHeight}px;
    flex-grow: 1;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
`
const Footer = styled.div `
    border-top: 1px solid ${borderColor};
    padding: 10px 0;
`
export default class App extends React.Component{

    render(){
        return <AppWrapper>
            <Header>
                <HeaderWrapper>
                    <HeaderTitle>Camera</HeaderTitle>
                </HeaderWrapper>
            </Header>
            <Main>
                <Container>
                    <Switch>
                        <Route exact path={'/watch/:id'} component={Watch}/>
                        <Route exact path={'/vod'} component ={Vod}/>
                    </Switch>
                </Container>
            </Main>
            <Footer>
                <Container>
                    hihihaha
                </Container>
            </Footer>
        </AppWrapper>
    }
}