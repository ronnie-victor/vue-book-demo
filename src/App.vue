<template>
  <div id="app">
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fadeIn">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
   <Tab></Tab>
  </div>
</template>

<script>
import Tab from './base/Tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style lang="less">
  *{margin: 0}
  ul,li{list-style: none}
  a{text-decoration: none}
  input,button{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;}
  .content{
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
    height: 85%;
    overflow: auto;
  }
  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
    transition: all 0.3s linear;
  }
  .fadeIn-leave-active{
    transition: all 0.3s linear;
    opacity: 0;
  }
</style>
