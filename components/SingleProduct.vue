<template>
    <div class="single-product">
        <div class="img-container">
            <img :src="getImage(product.img)" alt="">
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  product: {
    type: Object,
  },
});
// new URL('./logo.png', import.meta.url).href
const getImage = (src) => {
  return new URL(src, import.meta.url).href;
};
</script>

<style scoped>
.single-product .img-container {
  position: relative;
}
.single-product .img-container .sale {
  position: absolute;
  top: 0;
  left: 0;
  padding: 9px;
  background: #e91e63;
  right: auto;
  font-weight: 700;
  font-size: 12px;
  line-height: 13px;
  text-align: center;

  /* white */

  color: #ffffff;
}
.single-product .product-content {
  padding: 10px 0px;
}
.single-product .product-content h6 {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  opacity: 0.6;
}
.single-product .product-content .rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}
.single-product .rating .price {
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
}
</style>
