<template>
  <div class="app">
    <h1>🌍 Student List</h1>
    <AddStudentForm @add-student="addStudent" />
    <div class="nav">
      <router-link to="/">All</router-link>
      <router-link to="/under21">Under 21</router-link>
      <router-link to="/over21">Over 21</router-link>
    </div>
    <router-view 
      :students="students" 
      @remove-student="removeStudent" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AddStudentForm from './components/AddStudentForm.vue'


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

.nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
}

.nav a {
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.nav a.router-link-active {
  background-color: #333;
  color: #fff;
}
</style>