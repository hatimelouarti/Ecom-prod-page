<script setup>
import { ref, onMounted, watchEffect } from "vue";
const screenSize = ref(window.innerWidth);

watchEffect(() => {
  function handleResize() {
    screenSize.value = window.innerWidth;
  }

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
});

const imgs = ref([
  {
    imgsrc: "image-product-1.jpg",
    imgthumb: "image-product-1-thumbnail.jpg",
    state: "default",
  },
  {
    imgsrc: "image-product-2.jpg",
    imgthumb: "image-product-2-thumbnail.jpg",
    state: "",
  },
  {
    imgsrc: "image-product-3.jpg",
    imgthumb: "image-product-3-thumbnail.jpg",
    state: "",
  },
  {
    imgsrc: "image-product-4.jpg",
    imgthumb: "image-product-4-thumbnail.jpg",
    state: "",
  },
]);

const currimage = ref("");
const currimageindex = ref(1);
const activeThumbnail = ref(null);

const thumbcurrimage = (img, index) => {
  currimage.value = img.imgsrc;
  currimageindex.value = index;
  activeThumbnail.value = img;
};

const imagenext = () => {
  if (currimageindex.value < imgs.value.length - 1) {
    currimageindex.value += 1;
  } else {
    currimageindex.value = 0; // Reset to the first image
  }
  currimage.value = imgs.value[currimageindex.value].imgsrc;
};

const imageback = () => {
  if (currimageindex.value > 0) {
    currimageindex.value -= 1;
  } else {
    currimageindex.value = imgs.value.length - 1; // Reset to the last image
  }
  currimage.value = imgs.value[currimageindex.value].imgsrc;
};
onMounted(() => {
  imgs.value.forEach((img) => {
    if (img.state === "default") {
      currimage.value = img.imgsrc;
    }
  });
});
const emit = defineEmits(["lightgal"]);
const hover = ref(false);
</script>

<template>
  <div class="lg:max-w-[75%] m-auto min-w-[355px]">
    <div
      class="flex items-center justify-center rounded-md relative"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <template v-if="hover">
        <button
          @click="imagenext"
          class="animate-fade-in flex items-center justify-center absolute bg-white right-2 w-[40px] h-[40px] rounded-full lg:mr-[-20px] lg:right-0 lg:shadow"
        >
          <img src="../assets/icon-next.svg" alt="" />
        </button>
        <button
          @click="imageback"
          class="animate-fade-in flex items-center justify-center absolute bg-white left-2 w-[40px] h-[40px] rounded-full lg:ml-[-20px] lg:left-0 lg:shadow"
        >
          <img class="rotate-180" src="../assets/icon-next.svg" alt="" />
        </button>
      </template>

      <button @click="screenSize >= 1024 ? $emit('lightgal') : null">
        <img
          class="lg:rounded-2xl transition-opacity"
          :src="currimage"
          alt=""
        />
      </button>
    </div>
    <div class="mt-8 hidden lg:block">
      <ul class="flex gap-8">
        <li v-for="(img, index) in imgs" :key="index">
          <button>
            <img
              @click="thumbcurrimage(img, index)"
              class="border-2 border-transparent rounded-lg hover:border-orange hover:opacity-50 transition-opacity"
              :class="{ active: img === activeThumbnail }"
              :src="img.imgthumb"
              alt=""
            />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.active {
  border-color: orange; /* Apply border color */
}
</style>
