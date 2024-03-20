<template>
    <div class="content-card">
        <div class="image">
            <img src="/chinelo.jpeg" alt="">
        </div>
        <div class="info">
            <span>Chinelo Havaianas Delicada de stras</span>
            <div class="star-avaliation">
                <NuxtRating :read-only="true" :ratingValue="3" />
            </div>
            <div class="price">
                <div class="in-cach">
                    <span>R$ 59,99</span>
                </div>
                <div class="installments">
                    <span>em até 5x de R$ 11,99 sem juros</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
</script>

<style scoped>
.content-card{
    display: flex;
    flex-direction: column;
    max-width: 200px;
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    transition: all 1s ease 0s;
    cursor: pointer;
}
.image img{
    width: 100%;
    border-radius: 5px;
    object-fit: cover; 
}
.price{
    margin-top: 10px;
    font-size: 20px;
}
.installments{
    margin-top: 5px;
    font-size: 14px; 
}
.content-card:hover{
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.213);
    transition: opacity 1s ease 1s;
}
</style>