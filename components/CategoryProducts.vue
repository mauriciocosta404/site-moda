<script setup>
import { defineProps } from "vue";
defineProps(["title", "products", "tabs"]);
</script>

<template>
    <section class="category-products">
        <div class="container">
            <CategoryHeader :title="title" :tabs="tabs"/>
        </div>
    </section>
</template>

<style>

</style>

