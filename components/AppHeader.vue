<template>
    <nav class="navbar">
        <div class="logo-search">
            <div class="image-logo">
                <img src="/logo-kaadi-artesanatos.png" alt="">
            </div>
            <input class="search" 
                type="text" 
                placeholder="O que você esta procurando ?"
            >
        </div>
        <div class="options">
            <div class="icons">
                <img src="/icons/heart-outline.svg" alt="">
            </div>
            <div class="icons">
                <img src="/icons/person-outline.svg" alt="">
            </div>
            <div class="icons">
                <img src="/icons/cart-outline.svg" alt="">
            </div>
        </div>
    </nav>
</template>

<style scoped>

.navbar{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #ECCCC5;
    height: 75px;
    padding: 10px 30px;
    gap: 20px;
}

.image-logo img{
    width: 70px;
}

.search{
    padding: 10px;
    height: 27px;
    width: 300px;
    border: none;
    border-radius: 10px;
    outline: none;
}
.logo-search{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}

.options{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}

.icons img{
    max-width: 45px;
    width: 100%;
    color: blue;
}
</style>