<template>
    <NavBar />
    <div class="memberCenter">
        <div class="memberCenter-form">
            <div class="btns">
                <button @click="show = 'login'">會員登入</button>
                <button @click="show = 'register'">會員註冊 </button>
            </div>

            <LoginComponent v-if="show === 'login'" />
            <RegisteringComponent v-else-if="show === 'register'" />

        </div>
    </div>



    <FooterBar />

</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import RegisteringComponent from '@/components/RegisterComponent.vue';
import { ref } from 'vue';

const show = ref('login');
</script>


<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::before {
        box-sizing: border-box;

    }

    &::after {
        box-sizing: border-box;

    }

}





.memberCenter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .memberCenter-form {

        width: 100vw;
        height: 600px;





        .btns {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

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

                &:hover {
                    background-color: rgb(247, 217, 54);
                    color: black;
                    border: rgb(247, 217, 54) solid 1px;
                }


            }

        }



    }
}
</style>