<template>
<div>
  <table>
    <tr>
      <th>이름 :</th>
      <td>
        <input type="text" placeholder="이름을 입력해주세요.">
      </td>
    </tr>
    <tr>
      <th>아이디 :</th>
      <td>
        <input type="text" placeholder="아이디를 입력해주세요.">
      </td>
    </tr>
    <tr>
      <th>비밀번호 :</th>
      <td>
        <input type="text" v-model="this.$store.board.state.board.content" placeholder="비밀번호를 입력해주세요.">
      </td>
    </tr>
  </table>
  <button>확인</button>
  <button>취소</button>
</div>
</template>

<script>
export default {
  name: "CreateMember",
  methods: {
    createCancle() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>