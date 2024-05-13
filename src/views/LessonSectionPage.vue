<template>
    <NavBar />
    <div class="lesson-body">
        <div class="lesson-info">
            <h1>課程專區</h1>
            <p>減輕您多餘的體重，降低您身體的負擔，讓你的全身進行雕塑，打造完美動人曲線，快來運動健身吧</p>
        </div>


        <div class="lesson-btn">
            <button @click="currentView = 'courses'">課程介紹</button>
            <button @click="currentView = 'schedule'">課表查詢</button>
        </div>
        <CourseList v-if="currentView === 'courses'" />
        <ScheduleForm v-else-if="currentView === 'schedule'" />

    </div>





    <FooterBar />

</template>



<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import CourseList from '@/components/CourseList.vue';
import ScheduleForm from '@/components/ScheduleForm.vue';


import { ref } from 'vue';


const currentView = ref('courses');




</script>