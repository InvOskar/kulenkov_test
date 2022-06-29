<template>
    <div class="button">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.button {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.05em;
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