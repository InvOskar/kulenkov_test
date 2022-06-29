<template>
    <div class="scrollable flex-list" @scroll="handleScroll">
        <slot></slot>
    </div>
</template>

<script>
export default {
    methods: {
        handleScroll(event) {
            if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight - 50) {
                this.$emit('loadMore');
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.scrollable{
    width: 70%;
    height: 650px;

    overflow-y: scroll;
    padding: 50px;

    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 50px;

    -webkit-box-shadow: 0px 7px 35px var(--var-third-color);
    -moz-box-shadow: 0px 7px 35px var(--var-third-color);
    box-shadow: 0px 7px 35px var(--var-third-color);

    border-radius: 30px;
}
</style>