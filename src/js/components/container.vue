<template>
    <section class="container"
             :style="{
                width : maxWidth,
                marginTop : marginTop,
                marginBottom : marginBottom,
                zIndex : zIndex
             }"
             :class="{ 'container--no-padding' :  noPadding }">
        <slot></slot>
    </section>
</template>

<script>
    export default{
        props: {
            marginTop: String,
            marginBottom: String,
            noPadding: String,
            zIndex: String,
            maxWidth: String
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: block;
        position: relative;
        clear: both;
        width: 1200px;
        max-width: 100%;
        margin: 0 auto;
        padding: 0 15px;
    }

    .container--no-padding {
        padding: 0;
    }
</style>
