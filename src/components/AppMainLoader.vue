<script>
export default {
    name: 'LoaderComponent',
};
</script>

<template>
    <div class="d-flex justify-content-center align-items-center">
        <h2>Loading cards...</h2>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

div {
    background-color: $tertiary-color;
    color: $secondary-color;
    height: calc(100vh - 64px);

    h2 {
        font-size: 5rem;
    }
}
</style>