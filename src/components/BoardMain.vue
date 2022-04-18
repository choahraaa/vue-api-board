<template>
  <div>
    <h2>게시판 목록</h2>
    <table>
      <tr>
        <th>제목</th>
        <th>본문</th>
      </tr>
      <tr v-for="board in boardList" :key="board">
        <td>{{ board.title }}</td>
        <td>{{ board.content }}</td>
      </tr>
    </table>
    <button @click="boardInsert">글쓰기</button>
    <!--    <button @click="search">조회</button>-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    axios.get('/api/api-board')
        .then((response) => {
          this.boardList = response.data
        })
  },
  name: "BoardMain",
  data() {
    return {
      boardList: []
    }
  },
  methods: {
    // search() {
    //   axios.get('/api/api-board')
    //       .then((response) => {
    //         this.boardList = response.data
    //       })
    // },
    boardInsert() {
      this.$router.push('/insert')
    }
  }
}
</script>

<style scoped>

</style>