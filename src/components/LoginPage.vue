<template>
<div>
  <table>
    <tr>
      <th>아이디 :</th>
      <td>
        <input type="text">
      </td>
    </tr>
    <tr>
      <th>비밀번호 :</th>
      <td>
        <input type="password">
      </td>
    </tr>
    <button>로그인</button>
    <button @click="createMember">회원가입</button>
  </table>
</div>
</template>

<script>
export default {
  name: "LoginPage",
  methods: {
    createMember() {

    }
  }
}
</script>