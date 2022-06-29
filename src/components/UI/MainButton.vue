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
    font-size: 20px;
    line-height: 140%;
    text-transform: uppercase;

    background: var(--var-secondary-color);
    color: var(--var-main-color);

    padding: 20px;
    border-radius: 10px;

    &:hover{
        background: var(--var-main-color);
        color: var(--var-secondary-color);
        cursor: pointer;
    }
}
</style>