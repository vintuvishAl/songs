import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import logo from './logo.svg';
import song from './2.wav';
import song2 from './3.wav';
import song3 from './1.wav';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

import './App.css';
import io from "socket.io-client"; 

const options = {
  //audio lists model
  audioLists: [
    
   
    {
      name: "Move on",
      singer: "Mike posner",
      
      musicSrc: song2
    },
    {
      name: "avant gadner",
      singer: "cortny",
      cover: "https://media.gq.com/photos/5a859dab463e0e0b7680181d/16:9/w_1280%2Cc_limit/courtney-barnett-elizabeth-weinberg-05.jpg",
      musicSrc: song,
      lyric
    }
  ],

  //default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 1,

  //if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
  theme: "dark",

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  bounds: "body",

  //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  //"auto|metadata|none" "true| false"
  preload: false,

  //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: false,

  //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  //The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: true,
  
  

  //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    top: 300,
    left: 120
  },

  // play mode text config of the audio player
  

  //audio controller open text  [ type `String | ReactNode` default 'open']
  

  //audio controller close text  [ type `String | ReactNode` default 'close']
 

  //audio theme switch checkedText  [ type `String | ReactNode` default '-']
  

  //audio theme switch unCheckedText [ type `String | ReactNode` default '-']
  

  // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
  

  panelTitle: "ggwp",

  defaultPlayMode: "order",

  //audio mode        mini | full          [type `String`  default `mini`]
  mode: "full",

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: true,

  //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: false,

  //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: false,

  //audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: true,

  //audio playing progress is show of the "mini"  mode
  showMiniProcessBar: true,

  //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  //drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  //audio controller title [type `String | ReactNode`  default <FaHeadphones/>]
  

  //Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  //play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  //reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,

  //download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: true,

  //loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,

  //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: true,

  //lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: true,

  //Extensible custom content       [type 'Array' default '[]' ]
  extendsContent: [],

  //default volume of the audio player [type `Number` default `100` range `0-100`]
  defaultVolume: 100,

  //playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,

  //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  //Music is downloaded handle
 

  //audio play handle
  onAudioPlay(audioInfo) {
    console.log("audio playing", audioInfo);
  },

  //audio pause handle
  onAudioPause(audioInfo) {
    console.log("audio pause", audioInfo);
  },

  //When the user has moved/jumped to a new location in audio
  onAudioSeeked(audioInfo) {
    console.log("audio seeked", audioInfo);
  },

  //When the volume has changed  min = 0.0  max = 1.0
  onAudioVolumeChange(currentVolume) {
    console.log("audio volume change", currentVolume);
  },

  //The single song is ended handle
  

  //audio load abort The target event like {...,audioName:xx,audioSrc:xx,playMode:xx}
  onAudioAbort(e) {
    console.log("audio abort", e);
  },

  //audio play progress handle
  onAudioProgress(audioInfo) {
    // console.log('audio progress',audioInfo);
  },

  //audio reload handle
  onAudioReload(audioInfo) {
    console.log("audio reload:", audioInfo);
  },

  //audio load failed error handle
  

  //theme change handle
  onThemeChange(theme) {
    console.log("theme change:", theme);
  },

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log("[currentPlayId] audio lists change:", currentPlayId);
    console.log("[audioLists] audio lists change:", audioLists);
    console.log("[audioInfo] audio lists change:", audioInfo);
  },

  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    console.log(
      "audio play track change:",
      currentPlayId,
      audioLists,
      audioInfo
    );
  },

  onPlayModeChange(playMode) {
    console.log("play mode change:", playMode);
  },

  onModeChange(mode) {
    console.log("mode change:", mode);
  },

  onAudioListsPanelChange(panelVisible) {
    console.log("audio lists panel visible:", panelVisible);
  },

  onAudioListsDragEnd(fromIndex, endIndex) {
    console.log("audio lists drag end:", fromIndex, endIndex);
  },

  onAudioLyricChange(lineNum, currentLyric) {
    console.log("audio lyric change:", lineNum, currentLyric);
  }
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      socket: new io('http://localhost:4000', {}),
      params: options,
      name:'lala'
     
      
      
      
    }
  }

componentDidMount(){
  this.state.socket.connect();
}
componentWillUnmount(){
  this.state.socket.disconnect();
}

// _emitEvent(){
//   var red = Math.floor(Math.random() * 256);
//   var  blue = Math.floor(Math.random() * 256);
//   var green = Math.floor(Math.random() * 256);
  

//   var tata = {
//     x: red,
//     y: blue,
//     z: green
// }
//   this.state.socket.emit('sud', tata);
//   this.state.socket.on('sud', ggwp)
//   function ggwp(data){
//     document.getElementById('id1').style.color = "rgb(" + data.x + "," + data.y + "," + data.z + ")";
//   }
//   console.log(red + ',' + blue + ','+ green)
// }
onAddAudio = () => {
  const keka = {
    name: "name",
        singer: "nsme",
        
        
  }
  lol;
  this.state.socket.emit('song', keka);
  this.state.socket.on('song', (pata) => {
     this.lol = pata.name
  
   console.log(this.lol)
  });

  console.log(this.state.name);
  const data = {

    ...this.state.params,
    audioLists: [
      ...this.state.params.audioLists,
      {
        name: lol,
      singer: 'coldplay',
      
      musicSrc: song3
      }
    ]
  };
  this.setState({
    params: data
  });
  
};


render(){
  
  
  return (
    <div className="App">
      <header className="App-header">
        
        <p id="id1" >
          lalalala
        </p>
        <button   onClick = {() => this._emitEvent()} >ggwp</button>
        <button   onClick = {() => this.onAddAudio()} >add song</button>
        <ReactJkMusicPlayer {...this.state.params} />
        
      </header>
    </div>
  );
}
}

export default App;

