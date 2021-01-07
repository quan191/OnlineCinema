import React,{Component} from 'react'
import styled from 'styled-components'
import videojs from 'video.js'
import VideoPlayer from 'react-video-js-player'
const PlayerWrapper = styled.div`
    position : relative ;
`
const PlayerContent = styled.div`

`
export default class Vod extends Component{
    constructor(props){
        super(props);
        this._onTouchInsidePlayer=this._onTouchInsidePlayer.bind(this);
    }
    componentDidMount(){
    }
    _onTouchInsidePlayer(){
        if (this.player.paused){
            this.player.play();
        } 
        else {
            this.player.pause();
        }
    }
    render(){
        const style = {
            width : 640,
            height : 360,
            background : '#000',
        }
        const videoSrc = "http://localhost:3003/hls/index.m3u8";
        
        return <PlayerWrapper>
            <PlayerContent>
                <VideoPlayer src={videoSrc} width='720' height='420' type="application/x-mpegURL"/>
            </PlayerContent>
            
        </PlayerWrapper>
    }
}