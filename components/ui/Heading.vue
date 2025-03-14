<script setup lang="ts">
interface IProps {
    name: 'h1' | 'h2' | 'h3' | 'h4';
}

const props = defineProps<IProps>();

const componentId = computed(() => `${props.name}`);
const componentStyles = computed(() => ['heading', props.name]);
</script>

<template>
    <component :is="componentId" :class="componentStyles"><slot /></component>
</template>

<style scoped lang="scss">
.heading {
    margin: 0;
    padding: 0;
}
</style>