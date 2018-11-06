<template>
    <div class="detail">
      <MyHeader :back="true">详情页</MyHeader>
      <div>
        <ul>
          <li>
            <label for="bookName">书的名称</label>
            <input type="text" v-model="book.bookName" id="bookName">
          </li>
          <li>
            <label for="bookInfo">书的信息</label>
            <input type="text" v-model="book.bookInfo" id="bookInfo">
          </li>
          <li>
            <label for="bookPrice">书的价格</label>
            <input type="text" v-model.number="book.bookPrice" id="bookPrice">
          </li>
          <li>
            <button type="button" @click="update">确认修改</button>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import MyHeader from '../base/MyHeader'
import {findOneBook, updateBook} from '../api'

export default {
  name: 'detail',
  components: {MyHeader},
  async created () {
    this.getOneBook()
  },
  data () {
    return {book: {}}
  },
  watch: {
    $route () {
      this.getOneBook()
    }
  },
  computed: {
    bid () {
      return this.$route.params.bid
    }
  },
  methods: {
    async getOneBook () {
      let book = await findOneBook(this.bid)
      this.book = book
      Object.keys(this.book).length > 0 ? void 0 : this.$router.push('/list')
    },
    async update () {
      await updateBook(this.bid, this.book)
      this.$router.push('/list')
    }
  }
}
</script>

<style scoped lang="less">
  ul{
    margin: 50px 10px 0 10px;
    padding-left: 0px;
    li{
      label{
        display: block;
        font-size: 25px;
      }
      input{
        height: 25px;
        width: 100%;
        margin: 10px 0;
        font-size: 16px;
      }
      button{
        display: block;
        width: 80px;
        height: 35px;
        background: #0f8fea;
        border-radius: 4px;
        color: white;
        outline: none;
      }
    }
  }
.detail{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 100;
}
</style>
