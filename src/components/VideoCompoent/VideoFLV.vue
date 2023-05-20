<template>
  <VideoPlayer
    class="video-player vjs-big-play-centered "
    style="width:100%;height: 100%;"
    
    crossorigin="anonymous"
    :techOrder="['html5', 'flvjs']"
    @mounted="handleMounted"

    :isLive="true"
    :muted="true"
    :liveTracker="liveTracker"
    :src="streamstate.host +':'+ streamstate.port + streamstate.path"

    :controls="controls"
  />
</template>

<script setup lang="ts">
  import videojs, { VideoJsPlayer } from 'video.js'
  import { VideoPlayer } from '@videojs-player/vue'
  import 'video.js/dist/video-js.css'
  import {ref,reactive} from 'vue'
  import { streamstate } from '../../store/store.js'

  const playing = ref(true)
  const controls = ref(false)

  const liveTracker = reactive({
    trackingThreshold: 15,
    liveTolerance: 15
  })

  let playerd ;

  const handleMounted = ({ player }: { player: VideoJsPlayer }) => {
    import('./flv-video-tech').then(({ FlvJsTech }) => {
      videojs.registerTech('Flvjs', FlvJsTech)
      player.src(streamstate.host +':'+ streamstate.port + streamstate.path)
      playerd = player
    })
  }
  function ToggleControl() {
    controls.value = (controls.value ? false : true)
  }
  const TogglePlay = ()=>{
    if(playerd.paused()){
      playerd.currentTime( playerd.liveTracker.liveCurrentTime()- streamstate.delay)
      playerd.play()
    } else {
      playerd.pause()
    } 
  }

  const Play = ()=>{
      playerd.currentTime( playerd.liveTracker.liveCurrentTime()- streamstate.delay)
      playerd.play()
  }

  const Pause = ()=>{
      playerd.pause()
  }

  
  defineExpose({ToggleControl,TogglePlay,Play,Pause})

</script>

