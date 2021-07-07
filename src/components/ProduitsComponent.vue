<template>
  <div class="container">
    <h3 class="text-danger p-3 bg-warning">PRODUITS</h3>
    <div class="row">
      <!--Block pour lister tous les nom des produit-->
      <div class="col-md-6 col-sm-12">
        <h4 class="text-danger">NOS PRODUITS</h4>
        <ul class="list-group">
          <!--Listes nom des jeux nes-->
          <!--La classe active bootstrap switch de <li> lors du click-->
          <!--On boucle sur le tableau de produits remplis grace a la requette HTTP (axios) de notre services avec v-for -->
          <!--Au click sur un produit on appel la fonction setProduitConcerner qui recupe le produit dans le tableau grace a son index-->
          <li
              class="list-group-item text-success"
              v-bind:class="{active: index === produitIndex}"
              v-for="(produit, index) in produits" v-bind:key="index"
              v-on:click="setProduitConcerner(produit, index)"
          >
            {{ produit.title }}
          </li>
        </ul>
      </div>

      <!--Block de droitre afficher le contenu du produit cliké-->
      <div class="col-md-6 col-sm-12">
        <!--Si un produit est clické on affiche les details-->
        <div v-if="produitCourant">
          <h4 class="text-danger">DÉTAILS DU PRODUITS</h4>
          <div>
            <h5 class="text-info bg-success">{{ produitCourant.title }}</h5>
          </div>
          <div>
            <img v-bind:src="produitCourant.picture" :alt="produitCourant.title" :title="produitCourant.title"/>
          </div>
          <div>
            <p><b>Description :</b></p>
            <p>{{ produitCourant.description }}</p>
          </div>
          <div>
            <p><b>Prix :</b></p>
            <p>{{ produitCourant.price }} €</p>
          </div>
          <div>
            <p><b>Nombre de produit en stock :</b></p>
            <p>{{ produitCourant.stock }}</p>
          </div>
        </div>
        <!--Si aucun produit est clické on affiche ce block-->
        <div v-else>
          <p class="text-danger">MERCI DE SELECTIONNER UN PRODUIT</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
//Import du fichier services/ProduitsDatasServices.js -> classe + methodes CRUD axios requète HTTP
import ProduitsDatasServices from "../../services/ProduitsDatasServices";

export default {
  name: "ProduitsComponent",
  //Data-binding = getter et setter (accesseur et mutateur)
  data() {
    return {
      //Tableau vide des produits
      produits: [],
      //Produit clické = aucun par defaut
      produitCourant: null,
      //Index du  tableau[0,1,2,etc...] qui commence a index 0
      produitIndex: -1,
      //Recherche par titre
      title: ''
    }
  },
  methods: {
    //Fonction appeler quand le composant est monter (mounted() -> cycle de vie)
    afficherproduit() {
      //Appel de la methode (getAll) de la classe de serveice Requète HTTP methode GET
      ProduitsDatasServices.recupererTousProduits()
          //Promesse = le tableau de produit est rempli par la requète axios get
          .then(response => {
            //le tableu vide est remplis des données lors de la réponse
            this.produits = response.data
            //debug f12 => console
            console.log(response.data)
          })
          //Sinon on declenche une erreur
          .catch(error => {
            console.log("Pas de produit trouvé :" + error)
          });
    },
    //Au click sur le produit concerné
    setProduitConcerner(produit, index) {
      //Produit courant passe de null au produit clické
      this.produitCourant = produit;
      //Index passe de -1 a la position du produit clické dans son tableau
      this.produitIndex = index
    }
  },
  //Dans le cycle de vie Vuejs on appel la fonction afficher quand le composant est monté
  //1 -> insatnce de vue main.js
  //2 beforeCreate + created (greffe sur le name du composant) + beforeMount et enfin mounted()
  //3 lors du changement détécté dans le composant beforeUpdate + updated
  mounted() {
    this.afficherproduit()
  }
}
</script>

<style scoped>

</style>