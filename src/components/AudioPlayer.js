/* eslint-disable */

import React, {useState} from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

export default function AudioPlayer () {
    const [audioLists, setAudioLists] = useState([{ cover: 'https://yt3.ggpht.com/qkwHTtbPH2EEG3GCe7tvVTKG7uhsjFoGFufIHxOKUdpNmVEXhzW9_qDAx_oerCuOANIPYwyf5fs=s900-c-k-c0x00ffffff-no-rj', musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3' },{ musicSrc: 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3' }])

    return (
        <ReactJkMusicPlayer  {...options}  audioLists={audioLists} />
    )
}

const options = {
    remove : false,
    dark : true,
    quietUpdate : true,
    clearPriorAudioLists : true,
    showMediaSession : true,
    showMiniModeCover: false,
    remember: false,
    responsive: true,
    toggleMode: false,
    mode: 'full',
    showReload: false,
    showLyric: false,
    showPlayMode: false,
    showThemeSwitch: false,
    spaceBar: true,
}
