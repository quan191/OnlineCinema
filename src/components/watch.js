import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Player from './player'
import styled from 'styled-components'
const LiveWrapper = styled.div`

`
const LiveVid = styled.div`
    display: flex;
    justify-content: center;
`
export default class Watch extends React.Component{

    render(){
        return <LiveWrapper>
            <LiveVid>
                <Player/>
            </LiveVid>
        </LiveWrapper>
    }
}