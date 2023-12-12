<script>
export default {
    name: 'Nav',
};
</script>

<template>
    <nav class="col-10 row">
        <div class="col-2">
            <select class="form-select" aria-label="Default select example">
                <option selected>Select</option>
                <option value="1">One</option>
            </select>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
</style>