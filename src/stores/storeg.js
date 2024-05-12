import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      totalproducts: 0,
      totalproductsincart: 0,
      closecart: false,
      price: (127.0).toFixed(2),
      inject: [],
    };
  },
});
