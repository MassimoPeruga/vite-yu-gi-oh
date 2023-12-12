<script>
import Found from './AppMainFoundComponent.vue';
import Card from './AppMainCardComponent.vue'
import axios from 'axios';
export default {
    name: 'CardsContainer',
    components: {
        Found,
        Card,
    },
    data() {
        return {
            cards: [],
            apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0'
        };
    },
    created() {
        axios.get(this.apiURL).then((response) => {
            this.cards = response.data.data;
        });
    },
};
</script>

<template>
    <div class="col-10 p-5 mt-3" id="content">
        <Found />
        <div class="row row-cols-5 gy-3 gx-4" id="cards-container">
            <Card v-for="card in cards" :name="card.name" :image="card.card_images[0].image_url" :type="card.type" />
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