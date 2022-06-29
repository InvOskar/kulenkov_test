<template>
    <div class="product-page flex-list">
        <the-item-block :item="product" />
    </div>
</template>

<script>
import ProductService from '@/services/product.service';
import TheItemBlock from '@/components/TheItemBlock.vue';

const productService = new ProductService();

export default {
    components: { TheItemBlock },
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
.product-page{
    width: 100%;
    height: calc(100% - 100px);
}
</style>