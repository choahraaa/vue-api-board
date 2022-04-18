<template>
  <div>
    <h2>게시판 목록</h2>
    <table>
      <tr>
        <th>제목</th>
        <th>본문</th>
      </tr>
      <tr v-for="board in this.$store.state.boardList" :key="board">
        <td>{{ board.title }}</td>
        <td @click="editBoard">{{ board.content }}</td>
      </tr>
    </table>
    <button @click="boardInsert">글쓰기</button>
    <!--    <button @click="search">조회</button>-->
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('search');
  },
  name: "BoardMain",
  methods: {
    // search() {
    //   axios.get('/api/api-board')
    //       .then((response) => {
    //         this.boardList = response.data
    //       })
    // },
    boardInsert() {
      this.$router.push('/insert')
    },
    editBoard() {

    }
  }
}
</script>

<style scoped>

</style>