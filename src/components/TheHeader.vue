<template>
    <div class="header">
        <h1 @click="$router.push('/')">Fake store</h1>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header{
    padding: 20px;
    text-align: center;

    background: var(--var-main-color);
    color: var(--var-secondary-color);
}
h1{
    cursor: pointer;
}
</style>