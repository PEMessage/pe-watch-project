


<template>

<div class="warpperx">
  <main class="main">
    <menu class="sider g-box">  <Menu />    </menu>
    <div class="content g-box"> <MainContent />  </div>
  </main>
  <footer class="footer">FZU 2023</footer>
</div>
<Config />

</template>

<script setup>
import Menu from './components/Menu.vue'
import MainContent from './components/MainContent.vue';
import Config from './modals/Config.vue';


</script>

<style  lang="postcss" scoped>
.warpperx
{
  @apply bg-sea-900 h-screen flex flex-col overflow-y-auto
}


.main
{
 @apply flex flex-row  /*As a flex container*/
        flex-auto      /*As a flex element*/ 
}
.sider
{
  @apply  basis-1/4  p-0
}
.content
{
  @apply  basis-3/4   
}

.footer
{
  @apply text-center text-sea-200 text-sm shrink-0
}


</style>
