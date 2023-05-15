<template>
  <video-player
    class="video-player vjs-big-play-centered"
    poster="/images/example/3.jpg"
    crossorigin="anonymous"
    playsinline
    controls
    :volume="0"
    style="width: 100%; height: 100%;"
    :techOrder="['html5', 'flvjs']"
    @mounted="handleMounted"
  />
</template>

<script setup lang="ts">
  import videojs, { VideoJsPlayer } from 'video.js'
  import { VideoPlayer } from '@videojs-player/vue'
  import 'video.js/dist/video-js.css'

  const handleMounted = ({ player }: { player: VideoJsPlayer }) => {
    import('./flv-video-tech').then(({ FlvJsTech }) => {
      videojs.registerTech('Flvjs', FlvJsTech)
      player.src('http://localhost:8000/live/STREAM_NAME.flv')
    })
  }

</script>

