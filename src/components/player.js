import React,{Component} from 'react'
import styled from 'styled-components'
const PlayerWrapper = styled.div`
    position : relative ;
`
const PlayerContent = styled.div`
    
`
export default class Player extends Component{
    componentDidMount(){
        console.log('component did mount');
    }
    render(){
        const style = {
            width : 640,
            height : 360,
            background : '#000',
        }
        return <PlayerWrapper>
            <PlayerContent>
                <video style={style} ref={(player) => this.player=player} autoPlay={true}></video> 
            </PlayerContent>
            
        </PlayerWrapper>
    }
}