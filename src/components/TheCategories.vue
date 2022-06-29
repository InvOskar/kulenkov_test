<template>
    <div class="categories flex-list">
        <main-button v-for="category in categories" 
            :key="category" 
            @click="chooseCategory(category)"
            :class="{active: getCategory==category}">
            {{ category }}
        </main-button>
    </div>
</template>

<script>
import MainButton from './UI/MainButton.vue'
import CategoryService from '../services/category.service'
import { mapActions, mapGetters } from 'vuex'

const categoryService = new CategoryService();

export default {
    components: { MainButton },
    data() {
        return {
            categories: [],
        };
    },
    mounted(){
        categoryService.getAllCategories().then(categories => {
            this.categories = categories;
        });
    },
    computed: {
        ...mapGetters([ 'getCategory' ])
    },
    methods: {
        ...mapActions([ 'setCategory' ]),
        chooseCategory(category) {
            if (category == this.getCategory) this.setCategory('all');
            else this.setCategory(category);
        },
    },
}
</script>

<style lang="scss" scoped>
.categories{
    justify-content: space-evenly;
    width: 80%;
}
.active{
    background-color: #f5f5f5;
    color: blue;
}
</style>