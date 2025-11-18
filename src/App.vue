<template>
  <div class="app">
    <h1>🌍 Student List</h1>
    <AddStudentForm @add-student="addStudent" />
    <StudentList 
      :students="students" 
      @remove-student="removeStudent" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AddStudentForm from './components/AddStudentForm.vue'
import StudentList from './components/StudentList.vue'

const students = ref([])
let idCounter = 1

const addStudent = ({ name, age }) => {
  students.value.push({ id: idCounter++, name, age })
}

const removeStudent = (id) => {
  students.value = students.value.filter(s => s.id !== id)
}
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
}
</style>
