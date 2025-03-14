<script lang="ts" setup>
import BaseButton from '~/components/ui/BaseButton.vue';
import type { IProduct } from '~/types/product';

interface IProps {
  item: IProduct;
}

defineProps<IProps>();
</script>

<template>
  <article class="product-card">
    <NuxtLink to="#" class="product-card__link"></NuxtLink>
    <div class="product-card__body">
      <picture class="product-card__picture">
        <img :src="item.imgUrl" :alt="item.title">
      </picture>
      <span class="product-card__title">{{ item.title }}</span>
      <p class="product-card__text">{{ item.caption }}</p>
    </div>
    <footer class="product-card__footer">
      <div class="product-card__price">от {{ item.currentPrice }} ₽</div>
      <BaseButton type="secondary">Заказать</BaseButton>
    </footer>
  </article>
</template>

<style scoped lang="scss">
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 292px;
  justify-content: space-between;

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    text-decoration: none;
  }

  &__picture {
    display: flex;
    flex-direction: column;
    width: 100%;
    user-select: none;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  &__title {
    display: block;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 15px;
  }

  &__text {
    color: rgb(92, 99, 112);
    font-size: 14px;
    line-height: 20px;
    margin: 0;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
  }

  &__price {
    display: flex;
    margin: auto 0;
    justify-content: center;
  }
}
</style>