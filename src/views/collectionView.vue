<script setup>
import snProductGallery from "../components/snProductGallery.vue";
import LightBox from "../components/LightBox.vue";
import { useCounterStore } from "../stores/storeg";

import { ref } from "vue";
const counter = useCounterStore();
const light = ref(false);
const incr = () => {
  counter.totalproducts += 1;
};
const decr = () => {
  if (counter.totalproducts > 0) {
    counter.totalproducts -= 1;
  }
};
const addtocartlist = () => {
  if (counter.inject.length === 0) {
    if (counter.totalproducts > 0) {
      counter.inject.push({
        image: "image-product-1.jpg",
        totalpr: counter.totalproducts,
        title: "Fall Limited Edition Snakers",
        price: counter.price,
      });
    }
  } else {
    counter.inject.forEach((item) => {
      item.totalpr = counter.totalproducts;
    });
  }
};
</script>

<template>
  <LightBox @closelight="light = false" v-if="light"></LightBox>
  <div class="lg:flex gap-4 lg:mt-[100px]">
    <div class="basis-2/4">
      <snProductGallery @lightgal="light = true"></snProductGallery>
    </div>
    <div class="flex basis-2/4 items-center">
      <div class="lg:max-w-[75%] lg:min-w-[355px] p-12 lg:p-0">
        <div class="text-orange text-sm tracking-widest font-bold">
          SNEAKER COMPANY
        </div>
        <h2 class="text-5xl font-bold mt-4">Fall Limited Edition Snakers</h2>
        <p class="text-Darkgrayishblue mt-8">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div class="flex lg:block w-full items-center mt-8">
          <div class="flex w-full">
            <div class="text-3xl font-bold">$ {{ counter.price }}</div>
            <div
              class="bg-Paleorange px-1 h-6 w-10 rounded-md text-orange font-bold ml-4"
            >
              50%
            </div>
          </div>
          <div class="text-Grayishblue font-bold line-through">$250.00</div>
        </div>

        <div class="lg:flex mt-10 items-center">
          <div
            class="flex rounded-lg items-center justify-between min-w-[100%] lg:min-w-[158px] mr-[16px] bg-Lightgrayish h-[56px]"
          >
            <button @click="decr" class="ml-4">
              <img src="../assets/icon-minus.svg" alt="" />
            </button>
            <div class="font-bold">{{ counter.totalproducts }}</div>
            <button @click="incr" class="mr-4">
              <img src="../assets/icon-plus.svg" alt="" />
            </button>
          </div>
          <button
            @click="addtocartlist"
            class="flex shadow-[0_35px_60px_-15px_rgba(255,125,26,0.5)] hover:opacity-50 font-bold rounded-lg mt-6 lg:mt-0 bg-orange text-white w-[100%] lg:w-[272px] h-[56px] items-center justify-center"
          >
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-white mr-4"
                width="22"
                height="20"
              >
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                /></svg></span
            >Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
