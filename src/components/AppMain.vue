<script>
import MainNav from './AppMainNav.vue';
import CardsContainer from './AppMainCards.vue';

export default {
    name: 'Main',
    components: {
        MainNav,
        CardsContainer,
    },
};
</script>

<template>
    <main class="row justify-content-center p-3 pb-5">
        <MainNav />
        <CardsContainer />
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

main {
    background-color: $primary-color;
}
</style>