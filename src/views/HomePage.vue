<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const currentImage = ref(0);
const images = [
    'src/assets/workout2.jpg',
    'src/assets/workout3.jpg',
    'src/assets/workout4.jpg',
    'src/assets/workout5.jpg',
    'src/assets/workout6.jpg',
    'src/assets/workout7.jpg',
    'src/assets/workout8.jpg',
    'src/assets/workout9.jpg',

];

const changeImage = () => {
    currentImage.value = (currentImage.value + 1) % images.length;
}

let intervalId;

onMounted(() => {
    intervalId = setInterval(changeImage, 5000); //5秒一次
})

onUnmounted(() => {
    clearInterval(intervalId); //清除定時器
})
</script>


<template>
    <NavBar />

    <div class="content" :style="{ backgroundImage: 'url(' + images[currentImage] + ')' }"></div>

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