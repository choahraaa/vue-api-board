<template>
  <div>
    <h2>게시판 등록</h2>
    <table>
      <tr>
        <th>제목 :</th>
        <td>
          <input type="text" v-model="this.$store.state.board.title" placeholder="제목을 입력해주세요.">
        </td>
      </tr>
      <tr>
        <th>본문 :</th>
        <td>
          <textarea v-model="this.$store.state.board.content" placeholder="본문을 입력해주세요."></textarea>
        </td>
      </tr>
    </table>
    <button @click="insert">저장</button>
    <button @click="boardCancel">취소</button>
  </div>
</template>

<script>

export default {
  name: "BoardInsert",
  methods: {
    insert() {
      this.$store.dispatch('insert')
    },
    boardCancel() {
      this.title = '';
      this.content = '';
      this.$router.push('/main');
    }
  }
}
</script>

<style scoped>

</style>