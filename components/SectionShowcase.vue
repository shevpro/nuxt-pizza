<script setup lang="ts">
import Heading from '~/components/ui/Heading.vue';
import ProductCard from '~/components/ui/ProductCard.vue';
import type { IProduct } from '~/types/product';

interface IProps {
    title: string;
    items: Partial<IProduct[] | null>;
}

defineProps<IProps>();
</script>

<template>
    <section class="section-showcase container">
        <Heading v-if="title" name="h2" class="section-showcase__title">{{ title }}</Heading>
        <template v-for="item in items">
            <ProductCard 
                v-if="item"
                :item="item"
                :key="item.id"
                class="section-showcase__item"
            />
        </template>
    </section>
</template>

<style scoped lang="scss">
.section-showcase {
    display: flex;
    flex-wrap: wrap;

    &__title {
        width: 100%;
        margin-bottom: 30px;
    }

    &__item {
        margin-right: 37.3333px;
        margin-bottom: 60px;

        &:nth-child(4n+4) {
            margin-right: 0;
        }
    }
}
</style>