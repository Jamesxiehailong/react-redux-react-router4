import React from 'react';

export default class Live extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var myPlayer = videojs(this.props.pid);
			videojs(this.props.pid).ready(()=>{
				videojs(this.props.pid).play();
			});
    }
    componentWillUnmount(){
        videojs(this.props.pid).dispose();//不销毁要报错
    }
	render() {
		return <div style={{width:'80%',display: 'block',height: 350, marginLeft:"10%",marginTop:'10%',marginBottom:20,padding:5}}>
                <video style={{width:'100%',height: 350}} id ={this.props.pid} className="video-js vjs-default-skin vjs-big-play-centered" 
                    controls 
                    preload="auto" 
                    poster="./images/erha.jpg" 
                    data-setup='{"example_option":true}'>
                    <source src={this.props.videoUrl} type="rtmp/flv"></source>
                <p className="vjs-no-js">
                        你的浏览器不支持此HTML播放器，请升级你的浏览器
                    <a href="http://videojs.com/html5-video-support/" target="_blank">
                        supports HTML5 video
                    </a>
                </p>
              </video>
              </div>
	}
};