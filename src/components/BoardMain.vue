<template>
  <div>
    <h2>게시판 등록</h2>
    <table>
      <tr>
        <th>제목 :</th>
        <input type="text" placeholder="제목을 입력해주세요.">
      </tr>
      <tr>
        <th>본문 :</th>
        <textarea placeholder="본문을 입력해주세요."></textarea>
      </tr>
    </table>
    <button>저장</button>
    <button>취소</button>
  </div>
</template>

<script>
export default {
  name: "boardMain"
}
</script>

<style scoped>

</style>