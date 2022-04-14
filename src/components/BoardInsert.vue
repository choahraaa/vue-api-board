<template>
  <div>
    <h2>게시판 등록</h2>
    <table>
      <tr>
        <th>제목 :</th>
        <td>
          <input type="text" v-model="title" placeholder="제목을 입력해주세요.">
        </td>
      </tr>
      <tr>
        <th>본문 :</th>
        <td>
          <textarea v-model="content" placeholder="본문을 입력해주세요."></textarea>
        </td>
      </tr>
    </table>
    <button @click="insert">저장</button>
    <button @click="boardCancle">취소</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "boardMain",
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    insert() {
      axios.post('/api/api-board', {
        title: this.title,
        content: this.content
      })
          .then((response) => {
            alert('저장되었습니다.');
            this.title = '';
            this.content = '';
            console.log('response', response);
          });
    },
    boardCancle() {
      this.title = '';
      this.content = '';
    }
  }
}
</script>

<style scoped>

</style>