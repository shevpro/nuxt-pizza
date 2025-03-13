<script setup lang="ts">
import ClientHeader from '~/components/ClientHeader.vue';
import ClientNav from '~/components/ClientNav.vue';
</script>

<template>
    <main>
        <ClientHeader />
        <ClientNav />
        <slot />
    </main>
</template>