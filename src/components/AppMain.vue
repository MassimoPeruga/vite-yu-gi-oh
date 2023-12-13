<script>
import MainNav from './AppMainNav.vue';
import CardsContainer from './AppMainCards.vue';
import LoaderComponent from './AppMainLoader.vue';
import axios from 'axios';
import { store } from '../assets/js/_partials/_store';

export default {
    name: 'Main',
    components: {
        MainNav,
        CardsContainer,
        LoaderComponent,
    },
    data() {
        return {
            store,
        };
    },
    created() {
        axios.get(store.apiURL).then((response) => {
            store.cards = response.data.data;
        });
    },
};
</script>

<template>
    <div v-if="store.cards.length === 0">
        <LoaderComponent />
    </div>
    <main class="row justify-content-center p-3 pb-5 m-0" v-else>
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