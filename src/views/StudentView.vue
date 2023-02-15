<template>
    <div id="box">
        <h1>학생 {{ student.id ? '수정' : '등록' }}</h1>
        <input type="text" v-model.trim="student.studentNo" placeholder="학번을 입력하세요"/><br />
        <input type="text" v-model.trim="student.name" placeholder="이름을 입력하세요"/><br />
        <input type="email" v-model.trim="student.email" placeholder="메일 주소를 입력하세요"/><br />
        <div>
          <button type="button" @click="save"> 저장</button>
          <button type="button" @click="remove"> 삭제</button>
          <button type="button" @click="cancel"> 취소</button>
        </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "StudentView",
    data() {
      return { 
        student: { }
      };
    },
    mounted() {
      if (this.$route.params.id) {
        axios.get("http://localhost:8088/api/student/" + this.$route.params.id)
             .then(response => this.student = response.data)
             .catch(error => this.onError(error));
      } else
        this.student = { }
    },
    methods: {
      save() {
        if (this.student.id)
          axios.put("http://localhost:8088/api/student/update", this.student)
               .then(() => this.$router.push('studentlist') )
               .catch(error => this.onError(error));
        else
          axios.post("http://localhost:8088/api/student/add", this.student)
               .then(() => this.$router.push('studentlist') )
               .catch(error => this.onError(error));
      },
      remove() {
        if (confirm("삭제하시겠습니까?"))
          axios.delete("http://localhost:8088/api/student/delete?idlist=" + this.student.id)
               .then(() => this.$router.push('studentlist') )
               .catch(error => this.onError(error));
      },
      cancel() {
        this.$router.push('studentlist');
      },
      onError: function(error) {
        console.log(error);
        alert(error.message);
      }
    }
}
</script>

<style scoped>
h1 { border-bottom: 1px solid gray; }
div#box { padding: 30px; margin: 30px auto; width: 400px;
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa;
  text-align: left; 
}
input { padding: 6px; font-size: 12pt; width: 90%; margin-bottom: 10px; }
button { padding: 0.3em 1.3em; margin-left: 5px; font-size: 11pt; margin-top: 10px; }
</style>
