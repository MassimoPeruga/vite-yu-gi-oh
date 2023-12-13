<script>
import { store } from '../assets/js/_partials/_store';

export default {
    name: 'Nav',
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <nav class="col-10 row">
        <div class="col-2">
            <select class="form-select" aria-label="Default select example">
                <option selected>Select archetype</option>
                <option v-for="(archetype, index) in store.archetypes" :value="index">{{ archetype.archetype_name }}
                </option>
            </select>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
</style>