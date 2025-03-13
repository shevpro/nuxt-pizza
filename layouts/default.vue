<script setup lang="ts">
import ClientHeader from '~/components/ClientHeader.vue';
</script>

<template>
    <main>
        <ClientHeader>header</ClientHeader>
        <slot />
    </main>
</template>