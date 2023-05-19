
<template>
    <div class="category-header">
        <h3>{{ title }}</h3>
        <div class="tabs">
            <div v-for="(tab ,i) in tabs"
                :key="tab"
                class="tab"
                @click="activeIndex=i"
                :class="{active: activeIndex===i}">
                {{ tab }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
defineProps({
  title: {
    type: String,
  },
  tabs: {
    type: [Array, Object],
  },
});
const activeIndex = ref(0);
</script>

<style scoped>
.catagory-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}
.catagory-header h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
}
.tabs {
  display: flex;
  align-items: center;
}
.tabs .tab {
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  opacity: 0.6;
  transition: 0.3s;
  margin-right: 32px;
  cursor: pointer;
}
.tabs .tab.active,
.tabs .tab:hover {
  opacity: 1;
}
@media (max-width: 969px) {
  .tabs {
    display: none;
  }
}
</style>
