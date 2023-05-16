


<template>

<div class="warpper">
  <main class="main">
    <sider class="sider">  <Menu />       </sider>
    <div class="content">  <MainContent/> </div>
  </main>
  <footer class="footer box">FZU 2023</footer>
</div>

</template>

<script setup>
import Menu from './components/Menu.vue'
import MainContent from './components/MainContent.vue';


</script>

<style scoped lang="postcss" >
.box
{
  @apply border-solid border-2 border-gray-700 rounded-md p-1 m-1 ;
}
.box:hover
{
  @apply border-gray-500
} 
.warpper
{
  @apply bg-sea-900  h-screen flex flex-col 
}

.main
{
 @apply flex flex-row  /*As a flex container*/
        flex-auto      /*As a flex element*/
}
.sider
{
  @apply box basis-1/4 flex-col
}
.content
{
  @apply box basis-3/4 flex-col
}

.footer
{
  @apply text-center text-sea-200 text-sm
}


</style>
