<template>
    <div class="container">
        <div class="title">
            <h1>Coleção Verão</h1>
        </div>
        <div class="content">
            <AppCard></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppCard from '/components/AppCard.vue';
</script>

<style scoped>
.title{
    display: flex;
    justify-content: center;
    font-family: "Poppins";
}
.content{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.container{
    padding: 0 20px;
}
</style>