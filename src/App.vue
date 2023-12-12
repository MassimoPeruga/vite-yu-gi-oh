<script>
import { store } from './assets/js/_partials/_store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'Vite Yu-Gi-Oh',

  components: {
    AppHeader,
    AppMain,
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
  <AppHeader />
  <AppMain />
</template>

<style lang="scss"></style>