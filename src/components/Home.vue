<template>
    <div>
      <MyHeader :back="false">首页</MyHeader>
      <div class="content">
        <Loading v-if="loading"></Loading>
        <template v-else>
          <Swiper :swiperSlides = 'sliders'></Swiper>
          <div class="container">
            <h4>热门图书</h4>
            <ul>
              <li v-for="hot in hotBook" :key="hot.bookId">
                <img :src="hot.bookCover" alt="">
                <b>{{hot.bookName}}</b>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </div>
</template>

<script>
import MyHeader from '../base/MyHeader'
import Swiper from '../base/Swiper'
import {getAll} from '../api'
import Loading from '../base/Loading'

export default {
  created () {
    this.getData()
  },
  data () {
    return {sliders: [], hotBook: [], loading: true}
  },
  name: 'home',
  methods: {
    async getData () {
      let [sliders, hotBook] = await getAll()
      this.sliders = sliders
      this.hotBook = hotBook
      this.loading = false
    }
  },
  components: {
    MyHeader,
    Swiper,
    Loading
  }
}
</script>

<style scoped lang="less">
  h4{
    color: #999;
    padding: 5px 0;
  }
.container{
  width: 90%;
  margin: 0 auto;
  ul{
    display: flex;
    flex-wrap: wrap;
  }
  ul li{
    width: 50%;
    text-align: center;
    margin: 5px 0;
    padding-bottom: 10px;
    img{
      width: 100%;
    }
  }
}
</style>
