<template>
  <StudentList 
    :students="filteredStudents" 
    @remove-student="$emit('remove-student', $event)" 
  />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import StudentList from '../components/StudentList.vue'

const props = defineProps({
  students: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['remove-student'])
const route = useRoute()

const filteredStudents = computed(() => {
  if (route.path === '/under21') {
    return props.students.filter(s => s.age < 21)
  } else if (route.path === '/over21') {
    return props.students.filter(s => s.age >= 21)
  }
  return props.students
})
</script>
