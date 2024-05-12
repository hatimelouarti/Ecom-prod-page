<script setup>
import { ref } from "vue";
import snProductGallery from "./snProductGallery.vue";

const emit = defineEmits(["closelight"]);
</script>

<template>
  <div
    class="flex bg-black w-screen h-screen top-0 left-0 fixed z-40 bg-opacity-50 items-center justify-center"
  >
    <div class="relative hidden lg:block lg:max-w-[60%]">
      <button
        class="float-right mt-[-50px] mr-[130px]"
        @click="$emit('closelight')"
      >
        <img
          class="w-[25px] h-[25px] fill-white"
          src="../assets/icon-close.svg"
          alt=""
        />
      </button>
      <snProductGallery></snProductGallery>
    </div>
  </div>
</template>
