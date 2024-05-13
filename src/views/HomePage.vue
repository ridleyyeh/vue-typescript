<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
</script>


<template>
    <NavBar />

    <div class="content">
    </div>

    <FooterBar />


</template>


<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    overflow-x: hidden
}

.content {
    background-image: url('src/assets/workout.jpg');
    background-size: cover;
    background-repeat: repeat-x;
    // max-width: 100%;
    width: 100vw;
    height: 100vh;
    margin-top: 5rem;


}
</style>