import { reactive } from 'vue';

export const store = reactive({
    cards: [],
    apiCards: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0',
    archetypes: [],
    apiArchetypes: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    selectedArchetype: "",
});