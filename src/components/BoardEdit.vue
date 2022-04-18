<template>
<div>
  <h2>게시판 수정</h2>
  <table>
    <tr>
      <th>제목 :</th>
      <td>
        <input type="text" placeholder="제목을 입력해주세요.">
      </td>
    </tr>
    <tr>
      <th>본문 :</th>
      <td>
        <textarea placeholder="본문을 입력해주세요."></textarea>
      </td>
    </tr>
  </table>
  <button>수정</button>
  <button>취소</button>
</div>
</template>

<script>
export default {
  name: "BoardEdit",
  methods: {

  }
}
</script>
