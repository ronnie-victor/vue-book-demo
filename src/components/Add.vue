<template>
    <div>
     <MyHeader>添加</MyHeader>
      <div class="content">
        <ul>
          <li>
            <label for="bookName">书的名称</label>
            <input type="text" id="bookName" v-model="book.bookName">
          </li>
          <li>
            <label for="bookInfo">书的信息</label>
            <input type="text" id="bookInfo" v-model="book.bookInfo">
          </li>
          <li>
            <label for="bookPrice">书的价格</label>
            <input type="text" id="bookPrice" v-model="book.bookPrice">
          </li>
          <li>
          <li>
            <label for="bookCover">书的封面</label>
            <input type="text" id="bookCover" v-model="book.bookCover">
          </li>
          <li>
            <button type="button" @click="add">添加</button>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import MyHeader from '../base/MyHeader'
import {addBook} from '../api'

export default {
  name: 'Add',
  components: {MyHeader},
  data () {
    return {book: {}}
  },
  methods: {
    async add () {
      await addBook(this.book)
      this.$router.push('/list')
    }
  }
}
</script>

<style scoped lang="less">
  ul{
    margin: 20px 10px 0 10px;
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
</style>
