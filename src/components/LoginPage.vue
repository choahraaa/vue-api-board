<template>
  <div>
    <table>
      <tr>
        <th>아이디 :</th>
        <td>
          <input type="text" v-model="loginIdDD">
        </td>
      </tr>
      <tr>
        <th>비밀번호 :</th>
        <td>
          <input type="password" v-model="this.$store.state.login.user.loginPw">
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
    loginIdDD: {
      get() {
        return this.$store.state.login.user.loginId;
      }, set(value) {
        this.$store.commit("login/setLoginId", value);
      }
    }
  },
  created() {
    console.log('state', this.$store)
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