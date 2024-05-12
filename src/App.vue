<script setup>
import { RouterLink, RouterView } from "vue-router";
import MobileMenu from "./components/MobileMenu.vue";
import { useCounterStore } from "./stores/storeg";
import HeadMenu from "./components/HeadMenu.vue";
import snProductGallery from "./components/snProductGallery.vue";

import { ref } from "vue";
const counter = useCounterStore();
const showMobileMenu = ref(false);
</script>

<template>
  <MobileMenu
    @closeMobileMenu="showMobileMenu = false"
    v-if="showMobileMenu"
  ></MobileMenu>

  <div class="font-KumbhSans">
    <div
      class="2xl:w-3/5 xl:w-4/5 lg:w-4/5 md:w-5/5 sm:w-5/5 m-auto min-w-[375px]"
    >
      <header class="border-b">
        <HeadMenu @toggleMobile="showMobileMenu = !showMobileMenu"> </HeadMenu>
      </header>

      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
