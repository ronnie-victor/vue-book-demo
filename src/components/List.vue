<template>
    <div>
      <MyHeader>列表页</MyHeader>
      <div class="content" ref="scroll" @scroll="loadMore">
        <ul>
          <router-link v-for="book in books" :key="book.bookId" :to="{name: 'detail', params: {bid: book.bookId}}" tag="li">
            <img v-lazy="book.bookCover" alt="">
            <div>
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <b>{{book.bookPrice}}</b>
              <div class="btn-list">
                <button type="button" @click.stop="remove(book.bookId)">删除</button>
                <button type="button" @click.stop>添加</button>
              </div>
            </div>
          </router-link>
        </ul>
        <div @click="more" class="more">-加载更多-</div>
      </div>
    </div>
</template>

<script>
import MyHeader from '../base/MyHeader'
import {pagination, removeBook} from '../api'

export default {
  created () {
    this.getData()
  },
  data () {
    return {books: [], offset: 0, hasMore: true}
  },
  name: 'List',
  components: {
    MyHeader
  },
  methods: {
    loadMore () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        let {scrollTop, clientHeight, scrollHeight} = this.$refs.scroll
        if (scrollTop + clientHeight + 20 > scrollHeight) {
          this.getData()
        }
      }, 13)
    },
    more () {
      this.getData()
    },
    async getData () {
      if (this.hasMore) {
        let {hasMore, books} = await pagination(this.offset)
        this.books = [...this.books, ...books]
        this.hasMore = hasMore
        this.offset = this.books.length
      }
    },
    async remove (id) {
      await removeBook(id)
      this.books = this.books.filter(item => item.bookId !== id)
    }
  }
}
</script>

<style scoped>
.content ul{
  padding:10px;
}
  .content ul li{
    display: flex;
    padding: 10px 0px;
    border-bottom: 1px solid #f1f1f1;
  }
.content ul li img{
  width: 130px;
}
  .content h4{
    font-size: 20px;
    line-height: 25px;
  }
  .content p{
    color: #2a2a2a;
    line-height: 25px;
  }
  .content b{
    color: red;
  }
  .content button{
    display: block;
    width: 60px;
    height: 25px;
    background: red;
    border-radius: 15px;
    color: white;
    outline: none;
  }
  .more{
    margin: 10px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 15px;
  }
  .btn-list{
    display: flex;
    justify-content: space-around;
  }
</style>
