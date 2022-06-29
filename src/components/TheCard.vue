<template>
    <div class="card flex-list" @click="$router.push('/product/'+product.id)">
        <img :src="product.image" alt="">
        <h3>{{ product.title }}</h3>
        <p>{{ price }}</p>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    data(){
        return {
            price: 0,
        }
    },
    mounted(){
        this.price = '$'+this.product.price;
    },
}
</script>

<style lang="scss" scoped>
.card {
    max-width: 300px;

    flex-direction: column;
    gap: 20px;
    text-align: center;

    cursor: pointer;

    font-size: 24px;
}
img{
    max-height: 300px;
    max-width: 300px;
}
p{
    color: var(--var-secondary-color);
}
</style>