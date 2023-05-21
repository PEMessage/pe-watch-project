


<template>

<div class="warpperx">
  <main class="main">
    <div class="sider g-box">  <Menu />    </div>
    <div class="content g-box"> <MainContent />  </div>
  </main>
  <footer class="footer">
    <img src="../public/logo.png" class="block w-4 h-4 mr-2 my-1"/>
    <div class="text-sea-200">FZU 2023</div>
  </footer>
</div>
<JsonCilentModal />
<StreamModal />

</template>

<script setup>
import Menu from './components/Menu.vue'
import MainContent from './components/MainContent.vue';
import JsonCilentModal from './modals/JsonCilentModal.vue';
import StreamModal from './modals/StreamModal.vue';


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
  @apply  basis-1/4  p-0 overflow-y-auto max-h-screen
}
.content
{
  @apply  basis-3/4  flex-auto
}

.footer
{
  @apply   text-sm shrink-0 
          flex flex-row justify-center items-center
}


</style>
