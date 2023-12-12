<script>
import Found from './AppMainFoundComponent.vue';
import Card from './AppMainCardComponent.vue';
import { store } from '../assets/js/_partials/_store';
export default {
    name: 'CardsContainer',
    components: {
        Found,
        Card,
    },
    data() {
        return {
            store,
        }
    }
};
</script>

<template>
    <div class="col-10 p-5 mt-3" id="content">
        <Found :number="store.cards.length" />
        <div class="row row-cols-5 gy-3 gx-4" id="cards-container">
            <Card v-for="card in store.cards" :name="card.name" :image="card.card_images[0].image_url" :type="card.type" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

#content {
    background-color: $secondary-color;

    #cards-container {
        margin: -16px -12px;
    }
}
</style>