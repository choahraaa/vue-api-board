<template>
<div>
  <h2>게시판 수정</h2>
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
        <textarea  v-model="this.$store.state.board.content" placeholder="본문을 입력해주세요."></textarea>
      </td>
    </tr>
  </table>
  <button>수정</button>
  <button>취소</button>
</div>
</template>

<script>
export default {
  created() {
    const id = this.$route.params.id; //파라미터 id 가져오기
    this.$store.dispatch('fetch', id); // 파라미터로 id 넘기기
  },
  name: "BoardEdit",
  methods: {

  }
}
</script>
