<script setup>
import { ref, onMounted } from "vue";
import { useCounterStore } from "../stores/storeg";

const emit = defineEmits(["toggleMobile"]);

const counter = useCounterStore();
const cartstate = ref(false);
const products = counter.inject;
const empty = ref(false);

const showcart = (event) => {
  event.stopPropagation();
  cartstate.value = !cartstate.value;
};
const closecart = () => {
  cartstate.value = false;
};

const remove = (index) => {
  products.splice(index, 1);
};

document.body.addEventListener("click", closecart);
</script>
<template>
  <nav
    class="flex gap-2 text-Darkgrayishblue items-center h-[115px] justify-between"
  >
    <div class="flex">
      <div class="flex items-center ml-8 mt-1 lg:hidden">
        <button @click="$emit('toggleMobile')">
          <img src="../assets/icon-menu.svg" alt="" />
        </button>
      </div>
      <div class="flex ml-[20px] mr-[80px] items-center">
        <RouterLink to="/"><img src="../assets/logo.svg" alt="" /></RouterLink>
      </div>
      <ul class="lg:flex hidden">
        <li class="ml-[13px]">
          <RouterLink to="/"
            ><span
              class="hover:border-b-4 border-orange hover:text-Verydarkblue py-[43px]"
              >Collections</span
            ></RouterLink
          >
        </li>
        <li class="ml-[13px]">
          <RouterLink to="/"
            ><span
              class="hover:border-b-4 border-orange hover:text-Verydarkblue py-[43px]"
              >Men</span
            ></RouterLink
          >
        </li>
        <li class="ml-[13px]">
          <RouterLink to="/"
            ><span
              class="hover:border-b-4 border-orange hover:text-Verydarkblue py-[43px]"
              >Women</span
            ></RouterLink
          >
        </li>
        <li class="ml-[13px]">
          <RouterLink to="/"
            ><span
              class="hover:border-b-4 border-orange hover:text-Verydarkblue py-[43px]"
              >About</span
            ></RouterLink
          >
        </li>
        <li class="ml-[13px]">
          <RouterLink to="/"
            ><span
              class="hover:border-b-4 border-orange hover:text-Verydarkblue py-[43px]"
              >Contact</span
            ></RouterLink
          >
        </li>
      </ul>
    </div>

    <div class="flex items-center relative">
      <!-- Cart Icon Button -->
      <div class="relative">
        <button @click="showcart">
          <div
            v-if="products.length > 0"
            class="bg-orange rounded-2xl h-[14px] w-[20px] text-white absolute text-xs ml-2 mt-[-10px]"
          >
            {{ products.length }}
          </div>
          <img src="../assets/icon-cart.svg" alt="" />
        </button>
        <!-- Dropdown -->
      </div>
      <div class="hover:border-orange">
        <button>
          <img
            class="w-[40px] h-[40px] m-6 lg:w-[60px] lg:h-[60px] border-2 rounded-full hover:border-orange"
            src="../assets/image-avatar.png"
            alt=""
          />
        </button>
      </div>
    </div>
  </nav>
  <div
    @click.stop
    v-if="cartstate"
    class="flex justify-center lg:justify-end cart-dropdown"
  >
    <div
      class="bg-white mx-auto w-[96%] min-h-[250px] z-10 lg:w-[350px] absolute mt-6 lg:mt-[-30px] rounded-xl drop-shadow-xl"
    >
      <div class="flex border-b mt-4 items-center">
        <span class="text-black font-bold mb-4 ml-4">Cart</span>
      </div>
      <ul class="m-6">
        <div
          class="text-center text-Darkgrayishblue font-bold h-[180px] my-auto flex items-center justify-center"
          v-if="products.length === 0"
        >
          Your cart is empty
        </div>
        <li v-for="(product, index) in products" :key="index" class="mt-2">
          <div class="flex items-center justify-between gap-4">
            <img
              class="w-[60px] h-[60px] rounded-xl"
              :src="product.image"
              alt=""
            />
            <div>
              <h5>{{ product.title }}</h5>
              <div class="flex">
                <div>{{ product.price }} x {{ product.totalpr }}</div>
                <div class="text-black font-bold ml-4">
                  $ {{ product.price * product.totalpr }}
                </div>
              </div>
            </div>
            <button @click="remove(index)">
              <img src="../assets/icon-delete.svg" alt="" />
            </button>
          </div>
        </li>

        <button
          v-if="products.length > 0"
          class="font-bold rounded-lg bg-orange text-white w-[100%] h-[56px] mt-6"
        >
          Checkout
        </button>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
