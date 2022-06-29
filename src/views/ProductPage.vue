<template>
    <div class="product-page">
        <p>Title: {{ product.title }}</p>
        <p>Price: {{ product.price }}</p>
        <p>Description: {{ product.description }}</p>
    </div>
</template>

<script>
import ProductService from '@/services/product.service';

const productService = new ProductService();

export default {
    data(){
        return {
            product: {},
        }
    },
    mounted(){
        productService.getProduct(this.$route.params.id).then(product => {
            this.product = product;
        });
    },
}
</script>

<style lang="scss" scoped>

</style>