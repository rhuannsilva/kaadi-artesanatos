<template>
    <div class="content-delivey">
        <div class="title-delivery">
            Entrega
        </div>
        <div class="query">
            <div class="query-search">
                <input type="text">
            </div>
            <div class="btn-consult">
                <button>Consultar</button>
            </div>
        </div>
        <div class="info-delivery">
            <div class="type-delivery">
                <span>Receber em casa</span>
                <span>Entrega normal</span>
            </div>
            <div class="price-delivery">
                <span>R$ 30,99</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content-delivey {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    gap: 15px
}
.query-search{
    width: 100%;
}
.query-search input{
    padding: 15px;
    border-radius: 20px;
    width: 90%;
    border: 1px solid #00000027;
}
.query{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px
}
.btn-consult button{
    padding: 15px;
    border-radius: 10px;
    border: none;
    background-color: #ECCCC5;
    transition: all 0.5s ease;
    color: #fff;
    cursor: pointer;
}
.btn-consult button:hover{
    opacity: 0.5;
    transition: all 0.5s ease;
}
.info-delivery{
    border-top: 1px solid #00000025; 
    border-bottom: 1px solid #00000025; 
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.type-delivery{
    display: flex;
    flex-direction: column;
}
</style>