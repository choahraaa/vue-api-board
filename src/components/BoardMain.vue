<template>
  <div>
    <h2>게시판 목록</h2>
    <table>
      <tr>
        <th>제목</th>
        <th>본문</th>
      </tr>
      <tr v-for="board in this.$store.state.boardList" :key="board">
        <td @click="boardEdit(board.id)">
          {{ board.title }}
        </td>
        <td>{{ board.content }}</td>
      </tr>
    </table>
    <button @click="boardInsert">글쓰기</button>
    <br>
    <input type="text" v-model="title">
    <button @click="search">검색</button>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('search');
  },
  name: "BoardMain",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    search() {
      this.$store.dispatch('search', this.title);
    },
    boardEdit(id) {
      this.$router.push({
        name: 'BoardEdit',
        params: {id}
      })
    },
    boardInsert() {
      this.$router.push('/insert')
    }
  }
}
</script>

<style scoped>

</style>