<script>
export default {
    name: 'CardComponent',
    props: ['name', 'image', 'type',],
};
</script>

<template>
    <div class="col">
        <div class="ms_card text-center h-100">
            <img :src="image" :alt="name" class="d-block img-fluid">
            <h5 class="p-2">{{ name }}</h5>
            <h6 v-if="type" class="p-1">{{ type }}</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

.ms_card {
    background-color: $primary-color;

    h5 {
        color: $secondary-color;
    }

    h6 {
        color: $tertiary-color;
    }
}
</style>