<template>
    <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiao"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-shoucang"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia"></i>
      <span>添加</span>
    </router-link>
    </div>
</template>

<script>
export default {
  name: 'Tab'
}
</script>

<style scoped>
.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  background: white;
}
a{
  display: flex;
  color:#0a7db6;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
}
  a.router-link-active{
    color:red;
  }
</style>
