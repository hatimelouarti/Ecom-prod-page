<script setup>
import { ref } from "vue";
const emit = defineEmits(["closeMobileMenu"]);
</script>

<template>
  <div class="flex fixed z-20 w-screen h-screen">
    <div class="bg-white w-4/5 h-screen p-8">
      <button @click="$emit('closeMobileMenu')">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15">
          <path
            fill="hsl(219, 9%, 45%)"
            fill-rule="evenodd"
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          />
        </svg>
      </button>
      <ul class="mt-8">
        <li class="mb-6">
          <RouterLink to="/"
            ><span
              class="text-Verydarkblue font-bold text-lg hover:text-orange active:text-orange w-full"
              >Collections</span
            ></RouterLink
          >
        </li>
        <li class="mb-6">
          <RouterLink to="/"
            ><span
              class="text-Verydarkblue font-bold text-lg hover:text-orange active:text-orange w-full"
              >Men</span
            ></RouterLink
          >
        </li>
        <li class="mb-6">
          <RouterLink to="/"
            ><span
              class="text-Verydarkblue font-bold text-lg hover:text-orange active:text-orange w-full"
              >Women</span
            ></RouterLink
          >
        </li>
        <li class="mb-6">
          <RouterLink to="/"
            ><span
              class="text-Verydarkblue font-bold text-lg hover:text-orange active:text-orange w-full"
              >About</span
            ></RouterLink
          >
        </li>
        <li class="mb-6">
          <RouterLink to="/"
            ><span
              class="text-Verydarkblue font-bold text-lg hover:text-orange active:text-orange w-full"
              >Contact</span
            ></RouterLink
          >
        </li>
      </ul>
    </div>
    <div class="h-screen w-2/5 bg-black opacity-70">dsdass</div>
  </div>
</template>
