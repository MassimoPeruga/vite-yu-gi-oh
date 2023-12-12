<script>
export default {
    name: 'FoundComponent',
    props: ['number'],
};
</script>

<template>
    <p class="p-3 m-0 fs-3">Found {{ number }} cards</p>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

p {
    background-color: $tertiary-color;
    color: $secondary-color;
}
</style>