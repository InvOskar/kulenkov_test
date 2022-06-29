<template>
    <div class="main flex-list">
        <the-categories />
        <the-scrollable-block>
            <the-card v-for="product in products" :key="product.id" :product="product" />
        </the-scrollable-block>
    </div>
</template>

<script>
import TheCategories from '@/components/TheCategories.vue';
import TheHeader from '../components/TheHeader.vue';
import TheScrollableBlock from '@/components/TheScrollableBlock.vue';
import TheCard from '@/components/TheCard.vue';
import { mapGetters } from 'vuex';
import ProductService from '../services/product.service';

const productService = new ProductService();

export default {
    components: {
        TheHeader,
        TheCategories,
        TheScrollableBlock,
        TheCard,
    },
    data() {
        return {
            products: [],
            limit: 9,
        };
    },
    methods: {
        getProducts(){
            if(this.getCategory=='all'){
                productService.getProducts(this.limit).then(products => {
                    this.products = products;
                });
            }else{
                productService.getProductsByCategory(this.getCategory, this.limit).then(products => {
                    this.products = products;
                });
            }
        }
    },
    computed: {
        ...mapGetters([ 'getCategory' ])
    },
    mounted() {
        this.getProducts();
    },
    watch: {
        getCategory() {
            this.getProducts();
        },
    },
}
</script>

<style lang="scss" scoped>
.main {
    height: calc(100% - 100px);
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
}
</style>