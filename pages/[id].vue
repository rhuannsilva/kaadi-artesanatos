<template>
    <AppHeader></AppHeader>

    <div class="content">
        <div class="images">
            <div class="image-big">
                <img src="/public/download.jpg" alt="">
            </div>
        </div>
        <div class="information">
            <div class="title">
                <span>Chinelo Havaianas Delicada de stras  </span>
            </div>
            <div class="star">
                <NuxtRating :read-only="true" :ratingValue="3" />
            </div>
            <div class="price">
                <span class="in-cash">
                    R$59,99
                </span>
                <span class="in-card">
                    em até 5x de R$ 11,99 sem juros 
                </span>
            </div>
            <div class="action">
                <div class="buy">
                    <button class="btn-buy">Comprar</button>
                </div>
            </div>
            <div class="delivery">
                <AppDeliveryFreight />
            </div>
        </div>
    </div>

    <AppCollection :title="'Veja Mais'" />
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppDeliveryFreight from "~/components/AppDeliveryFreight.vue"; 
import AppCollection from "~/components/AppCollection.vue";
</script>

<style scoped>

.content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 40px;
    margin: 15px 0;
}

.image-big{
    width: 550px;
    height: 400px;
  
}

.image-big img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.title{
    font-size: 25px;
}

.price{
    margin: 25px 0 ;
    display: flex;
    flex-direction: column;
}

.in-cash{
    font-size: 24px;
}

.btn-buy{
    padding: 10px;
    width: 50%;
    border-radius: 20px;
    border: none;
    background-color: #ECCCC5;
    color: #fff;
    transition: all 0.5s ease;
    cursor: pointer;
}
.btn-buy:hover{
    opacity: 0.5;
    transition: all 0.5s ease;
}

</style>