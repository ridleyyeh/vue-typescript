<script setup lang="ts"></script>

<template>
    <div class="navbar">
        <div class="navbar-left-sec">
            <a href="">會員中心</a>
            <a href="">課表查詢</a>
            <a href="">預約體驗</a>
        </div>
        <div class="navbar-title">
            <a href="" class="title">北投健身房</a>
        </div>


        <div class="navbar-right-sec">
            <a href="">健身課程</a>
            <a href="">最近的運動地點</a>
        </div>
    </div>

</template>


<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



body {
    position: relative;
}


.navbar {

    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1000000;
    // border: 2px solid rgb(247, 217, 54);
    height: 5rem;




    .navbar-left-sec {

        width: 350px;
        display: flex;
        justify-content: flex-start;
        gap: 25px;
        flex: 1;
        margin-left: 4rem;


        a {
            color: black;
            font-weight: 900;


            &:hover {
                color: rgb(247, 217, 54);
                background-color: transparent;

            }
        }
    }

    .navbar-title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;



        .title {
            font-size: 32px;
            color: black;
            font-weight: 900;
            text-align: center;
            margin-bottom: 15px;


            &:hover {
                color: rgb(247, 217, 54);
                background-color: transparent;

            }


        }
    }

    .navbar-right-sec {

        display: flex;
        justify-content: flex-end;
        flex: 1;
        gap: 25px;
        margin-right: 4rem;


        a {
            color: black;
            font-weight: 900;

            &:hover {
                color: rgb(247, 217, 54);
                background-color: transparent;

            }
        }


    }
}
</style>