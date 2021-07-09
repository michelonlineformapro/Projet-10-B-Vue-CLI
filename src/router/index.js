import Vue from 'vue'
import VueRouter from 'vue-router'
//Import de la vue

import Accueil from "@/views/Accueil";
import Produits from "@/views/Produits";

import AjouterProduit from "@/views/AjouterProduit";
import DetailsProduit from "@/views/DetailsProduit";


Vue.use(VueRouter)

const routes = [
  {
    //Si url = / appel de la vue Accueil qui appel AccueilComponent
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    //Si url = /produits appel de la vue Produit qui appel ProduitComponent
    path: '/produits',
    name: 'Produits',
    component: Produits
  },
  {
    //Si url = /ajouter-produit appel de la vue AjouterProduit qui appel AjouterProduitComponent
    path: '/ajouter-produit',
    name: 'AjouterProduit',
    component: AjouterProduit
  },
  {
    //Si url = /produits/:id appel de la vue DetailsProduit qui appel DetailsProduitComponent
    path: '/produits/:id',
    name: 'DetailsProduit',
    component: DetailsProduit
  }
]
//Insatnce du middleware Router (vue add router dans un terminal)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
