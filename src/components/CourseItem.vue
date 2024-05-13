<template>
    <div class="course-item">
        <h3>{{ course.name }}</h3>
        <p>{{ course.description }}</p>
    </div>
</template>

<script setup>
defineProps({
    course: {
        type: Object,
        required: true
    }
});
</script>

<style scoped>
.course-item {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
</style>