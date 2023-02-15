<template>
    <div id="box">
      <h1>학생 목록</h1>
      <table>
        <tr>
          <td class="id">id</td>
          <td class="studentNo">학번</td>
          <td class="name">이름</td>
        </tr>
        <tr v-for="student in studentList" v-bind:key="student.id"  v-on:click="edit(student.id)">
          <td>{{ student.id }}</td>
          <td>{{ student.studentNo }}</td>
          <td>{{ student.name }}</td>
        </tr>
      </table>
      <button type="button" v-on:click="add">학생 등록</button>
      <button type="button" v-on:click="reload">새로고침</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "StudentListView",
    data() {
      return { 
        studentList: []
      };
    },
    mounted() {
      this.reload();
    },
    methods: {
      reload() {
        axios.get("http://localhost:8088/api/student/list")
             .then(response => this.studentList = response.data )
             .catch(error => this.onError(error));
      },
      add() {
        this.$router.push("student");
      },
      edit(id) {
        this.$router.push({ name: "student", params: { id: id }});
      },
      onError: function(error) {
        console.log(error);
        alert(error.message);
      }
    }
  }
  </script>
  
  <style scoped>
  div#box { padding: 30px; margin: 30px auto; width: 400px;
    border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa;
    text-align: left;
  }
  h1 { border-bottom: 1px solid gray; }
button { padding: 0.4em 1.4em; margin-right: 5px; font-size: 11pt; }
table { border-collapse: collapse; margin-bottom: 20px; }
tr:nth-child(1) { background-color: #ddd; }
td { padding: 5px;  border: 1px solid #aaa; }
td.id { width: 70px; }
td.studentNo { width: 100px; }
td.name { width: 200px; }
tr:not(:nth-child(1)):hover { background-color: #ffa; cursor: pointer; }
</style>

  