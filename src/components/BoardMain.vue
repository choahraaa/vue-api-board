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
    <a v-if="this.$store.state.paging.pagingStart > 1" @click="movePage(this.$store.getters.prevPaging)">이전</a>
    <a v-for="(page, index) in this.$store.state.paging.pageSize" :key="page" @click="movePage(this.$store.state.paging.pagingStart + index)">
      {{this.$store.state.paging.pagingStart + index}}
    </a>
    <a v-if="this.$store.state.paging.pagingStart < this.$store.state.paging.lastPaging" @click="movePage(this.$store.getters.nextPaging)">다음</a>
    <br>
    <button @click="boardInsert">글쓰기</button>
    <br>
    <select v-model="board.type">
      <option value="">전체</option>
      <option value="title">제목</option>
      <option value="content">내용</option>
    </select>
    <input type="text" v-model="board.keyword">
    <button @click="search">검색</button>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('search', this.board);
  },
  name: "BoardMain",
  data() {
    return {
      board: {
        type: '',
        keyword: '',
        paging: {
          page: '1'
        }
      }
    }
  },
  methods: {
    search() {
      this.$store.dispatch('search', this.board);
    },
    boardEdit(id) {
      this.$router.push({
        name: 'BoardEdit',
        params: {id}
      })
    },
    boardInsert() {
      this.$router.push('/insert')
    },
    movePage(page) {
      this.board.paging.page = page;
      console.log(this.board)
      this.$store.dispatch('search', this.board);
    }
  }
}
</script>

<style scoped>

</style>