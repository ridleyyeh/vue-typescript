<template>
    <div>
        <h2>课程介绍</h2>
        <CourseItem v-for="course in courses" :key="course.id" :course="course" />
    </div>
</template>

<script setup>

import { ref } from 'vue';
import CourseItem from './CourseItem.vue'; './CourseItem.vue';

const courses = ref([
    { id: 1, name: 'FORCE課程', description: '強度訓練課程...' },
    { id: 2, name: '靜態課程', description: '提高肌肉控制力...' },
    { id: 3, name: '飛輪课程', description: '提高肌肉控制力...' },

]);

</script>

<style scoped>
h2 {
    margin-bottom: 20px;
}
</style>