import Vue from 'vue'
import VueRouter from 'vue-router'
//Import de la vue

import Accueil from "@/views/Accueil";
import Produits from "@/views/Produits";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/produits',
    name: 'Produits',
    component: Produits
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
