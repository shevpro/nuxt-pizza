<script lang="ts" setup>
  const layout = computed(() => {
    const { meta } = useRoute();
    return defineAsyncComponent(() => import(`./layouts/${meta.layout ?? 'default'}.vue`));
  });
</script>

<template>
  <component :is="layout">
    <NuxtPage />
  </component>
</template>