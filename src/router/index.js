import { createRouter, createWebHistory } from "vue-router";

import CollectionView from "../views/collectionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "/",
      component: CollectionView,
    },
  ],
});

export default router;
