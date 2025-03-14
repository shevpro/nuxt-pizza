<script setup lang="ts">
import SectionShowcase from '~/components/SectionShowcase.vue';
import type { IProduct } from '~/types/product';

const { data: showCasePizza = [] as IProduct[] } = await useFetch('/api/products');
</script>

<template>
    <div class="home container">
        <SectionShowcase
            title="Пиццы"
            :items="showCasePizza"
        />
    </div>
</template>