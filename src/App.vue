


<template>

<div class="warpperx">
  <main class="main">
    <sider class="sider g-box">  <Menu />    </sider>
    <div class="content g-box"> <MainContent />  </div>
    
  </main>
  <footer class="footer">FZU 2023</footer>
</div>

</template>

<script setup>
import Menu from './components/Menu.vue'
import MainContent from './components/MainContent.vue';


</script>


<style  lang="postcss" scoped>
.warpperx
{
  @apply bg-sea-900 h-screen flex flex-col 
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
