<template>
    <div class="item flex-list">
        <img :src="item.image" alt="">
        <div class="text flex-list">
            <p class="title" contenteditable="true"
                @input="updateTitle($event.target.innerHTML)"
                v-html="item.title"></p>
            <div class="flex-list price">
                <p>${{ item.price }}</p>
                <p v-if="item.rating">Rating: {{ item.rating.rate }}</p>
            </div>
            <div class="description flex-list">
                <p>Description:</p>
                <p contenteditable="true" 
                    @input="updateDescription($event.target.innerHTML)"
                    v-html="item.description"></p>
            </div>
            <div class="btns flex-list">
                <div class="btn" @click="deleteItem()">Delete</div>
                <div class="btn" @click="updateItem()">Update</div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductService from '@/services/product.service';

const productService = new ProductService();

export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            rating: 0,
            editedTitle: '',
            editedDescription: '',
        };
    },
    methods: {
        deleteItem() {
            productService.deleteProduct(this.item.id).then(() => {
                this.$router.push('/');
            });
        },
        updateTitle(title) {
            this.editedTitle = title;
        },
        updateDescription(description) {
            this.editedDescription = description;
        },
        updateItem() {
            if(this.editedTitle != this.item.title || this.editedDescription != this.item.description) {
                productService.updateProduct(this.item.id, {
                    title: this.editedTitle,
                    description: this.editedDescription,
                    price: this.item.price,
                    rating: this.rating,
                }).then(() => {
                    this.$router.push('/');
                });
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.item{
    width: 80%;
    height: 800px;
    margin: auto;

    -webkit-box-shadow: 0px 7px 35px var(--var-third-color);
    -moz-box-shadow: 0px 7px 35px var(--var-third-color);
    box-shadow: 0px 7px 35px var(--var-third-color);

    border-radius: 50px;
}
img{
    max-height: 800px;
    max-width: 50%;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
}
.text {
    flex-direction: column;
    gap: 50px;
    padding: 20px;
}
.title {
    font-size: 50px;
    font-weight: bold;
}
.price {
    font-size: 42px;
    font-style: italic;
    justify-content: space-evenly;
    width: 100%;

    &>p:first-child{
        color: var(--var-secondary-color);
    }
}
.description{
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;


    &>p{
        font-size: 28px;

        &:first-child{
            font-weight: bold;
        }
    }
}
.btns{
    width: 100%;
    justify-content: space-evenly;
}
.btn{
    font-style: normal;
    font-size: 20px;
    line-height: 140%;
    text-transform: uppercase;

    background-image: linear-gradient(
        to right, 
        var(--var-secondary-color), 
        var(--var-secondary-color) 50%, 
        var(--var-main-color) 50%
    );
    background-size: 200% 100%;
    background-position: -100%;

    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.5s ease-in-out;

    &:before{
        content: '';
        background: var(--var-secondary-color);
        display: block;
        position: absolute;
        bottom: 2px;
        width: 0;
        height: 2px;
        transition: all 0.5s ease-in-out;
    }
    &:hover {
        background-position: 0;
        cursor: pointer;
    }
    &:hover::before{
        width: 100%;
    }
}
</style>