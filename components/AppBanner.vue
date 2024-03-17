<template>
    <a-carousel arrows>
        <template #prevArrow>
            <div class="custom-slick-arrow" style="left: 60px; z-index: 1">
                <left-circle-outlined />
            </div>
        </template>
        <template #nextArrow>
            <div class="custom-slick-arrow" style="right: 60px">
                <right-circle-outlined />
            </div>
        </template>

        <div> 
            <img src="/download.jpg" alt="">
        </div>
        <div> 
            <img src="/download.jpg" alt="">
        </div>
        <div> 
            <img src="/download.jpg" alt="">
        </div>
    </a-carousel>
</template>

<style scoped>
/* For demo */
:deep(.slick-slide) {
    text-align: center;
    height: 400px;
    line-height: 400px;
    background: #364d79;
    overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    transition: ease all 0.3s;
    opacity: 0.3;
    z-index: 1;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
    display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
    color: #fff;
    opacity: 0.5;
}

:deep(.slick-slide img) {
    width: 100%;
    object-fit: cover; 
}
</style>

<script lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';


</script>