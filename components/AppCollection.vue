<template>
    <div class="container">
        <div class="title">
            <h1>{{props.title}}</h1>
        </div>
        <div class="content">
            <AppCard @click="navigate()"></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppCard from '/components/AppCard.vue';

const props = defineProps({
    title: String
})

function navigate(){

    navigateTo({
        path: '/chinelo-havaianas-tam-39',
        query: {
            page: 1,
            sort: 'asc'
        },
    })

}

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