<template>
    <div>
        <h2>课表查询</h2>
        <form @submit.prevent="onSubmit">

            <input type="submit" value="查询" />
        </form>
    </div>
</template>

<script setup>
const onSubmit = () => {

    alert('查询提交!');
};
</script>

<style scoped>
form {
    margin-top: 20px;
}
</style>