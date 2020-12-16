import React,{Component} from 'react'
import styled from 'styled-components'
import Hls from 'hls.js'
const PlayerWrapper = styled.div`
    position : relative ;
`
const PlayerContent = styled.div`

`
export default class Player extends Component{
    componentDidMount(){
        console.log('component did mount');
        if(Hls.isSupported() && this.player) {
            const streamURL = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
            const video = this.player;
            const hls = new Hls();
            hls.loadSource(streamURL);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED,function() {
                video.play();
            });
        }
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