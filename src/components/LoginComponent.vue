<template>
    <form class="login-form">
        <label for="username">會員帳號</label>
        <input type="text" id="username" v-model="username">

        <label for="password">會員密碼</label>
        <input type="password" id="password" v-model="password">

        <button type="button" @click="login">登入</button>
        <a href="#">忘記密碼?</a>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

function login() {
    //後端邏輯
}
</script>

<style scoped lang="scss">
.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 3rem;

    label {
        font-size: 22px;
        font-weight: 700;
    }

    input {
        width: 250px;
        height: 30px;
        border: 3px solid black;
        border-radius: 25px;
    }

    button {
        background-color: black;
        color: rgb(247, 217, 54);
        width: 200px;
        height: 50px;
        border: black solid 1px;
        border-radius: 25px;
        margin: 10px 20px;
        font-size: 20px;
        font-weight: 800;
        margin-top: 2rem;

        &:hover {
            background-color: rgb(247, 217, 54);
            color: black;
            border: rgb(247, 217, 54) solid 1px;
        }


    }

    a {
        font-weight: 800;
        text-decoration: none;
        color: black;
    }
}
</style>