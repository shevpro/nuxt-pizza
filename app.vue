<script lang="ts" setup>
  const layout = computed(() => {
    const { meta } = useRoute();
    return meta.layout ?? 'default';
  });
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>