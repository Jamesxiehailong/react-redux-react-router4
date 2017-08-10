import React from 'react';
import ReactPlayer from 'react-player';
import {
  findDOMNode
}
from 'react-dom';
import screenfull from 'screenfull';
import {
  Icon, Progress
}
from 'antd';
import './Player.scss';

export default class Player extends React.Component {
  state = {
    playing: true,
    volume: 0,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0
  }
  playPause = () => {
    this.setState({
      playing: !this.state.playing
    })
  }
  onProgress = state => {
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player))
  }
  render() {
    const {
      url,
      playing,
      volume,
      played,
      loaded,
      duration,
      playbackRate,
      soundcloudConfig,
      vimeoConfig,
      youtubeConfig,
      fileConfig
    } = this.state
    return <div className="player-div">
            <ReactPlayer
              ref={player => { this.player = player }}
              className='react-player'
              width='100%'
              height='100%'
              url={this.props.url}
              loop={this.props.loop}
              playing={playing}
              playbackRate={playbackRate}
              volume={volume}
              soundcloudConfig={soundcloudConfig}
              vimeoConfig={vimeoConfig}
              youtubeConfig={youtubeConfig}
              fileConfig={fileConfig}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={() => this.setState({ playing: true })}
              onPause={() => this.setState({ playing: false })}
              onBuffer={() => console.log('onBuffer')}
              onEnded={() => this.setState({ playing: false })}
              onError={e => console.log('onError', e)}
              onProgress={this.onProgress}
              onDuration={duration => this.setState({ duration })}
            />
            <div className="player-contr" style={this.props.ishide}>
              <Progress className="player-pro" percent={played*100} strokeWidth={2} showInfo={false}/>
              <span className="player-play" onClick={this.playPause}><Icon type={playing ? 'Pause' : 'play-circle'} /></span>
              <span className="player-scan" onClick={this.onClickFullscreen}><Icon type='scan' /></span>
            </div>
          </div>
  }
}