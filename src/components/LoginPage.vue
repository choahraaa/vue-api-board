<template>
  <div>
    <table>
      <tr>
        <th>아이디 :</th>
        <td>
          <input type="text" v-model="loginId">
        </td>
      </tr>
      <tr>
        <th>비밀번호 :</th>
        <td>
          <input type="password" v-model="loginPw">
        </td>
      </tr>
    </table>
    <button @click="loginUser">로그인</button>
    <button @click="createMember">회원가입</button>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  computed: {
    loginId: {
      get() {
        return this.$store.state.login.user.loginId;
      }, set(loginId) {
        this.$store.commit("login/setLoginId", loginId);
      }
    },
    loginPw: {
      get() {
        return this.$store.state.login.user.loginPw;
      }, set(loginPw) {
        this.$store.commit("login/setLoginPw", loginPw);
      }
    }
  },
  methods: {
    createMember() {
      this.$router.push('/createMember')
    },
    loginUser() {
      this.$store.dispatch('login/login')
    }
  }
}
</script>