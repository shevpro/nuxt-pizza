<script lang="ts" setup>
interface IProps {
  type: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'primary',
});

const componentsStyle = computed(() => ['button', `button-${props.type}`]);
</script>

<template>
  <button type="button" :class="componentsStyle">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  position: relative;
  overflow: hidden;
  border: none;
  outline: none;
  user-select: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 9999px;
  background-color: transparent;
  height: 40px;
  padding: 8px 20px;
  font-size: 16px;
  line-height: 24px;

  &-primary {
    background-color: rgb(255, 105, 0);
    color: rgb(255, 255, 255);
  }

  &-secondary {
    background-color: rgb(255, 240, 230);
    color: rgb(209, 87, 0);
  }
}
</style>