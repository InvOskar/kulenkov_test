<template>
    <div class="scrollable flex-list">
        <slot></slot>
    </div>
</template>

<script>
import { gsap } from "gsap";
export default {
    mounted() {
        gsap.from('.scrollable', {
            delay: 0.5,
            duration: 0.7,
            opacity: 0,
            y: 100,
        });
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
    gap: 50px;

    box-shadow: 0px 7px 35px rgba(0, 59, 147, 1);
    border-radius: 30px;
}
</style>