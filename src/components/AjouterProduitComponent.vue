<template>
  <!--SI la condition valide est false-->
  <div v-if="!valide" class="container">
    <h3 class="text-danger bg-success p-3">AJOUTER UN PRODUIT</h3>
    <!--Formulaire ajout de produit title + description + picture + price + stock-->
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        id="title"
        required
        v-model="produits.title"
        name="title"
        placeholder="Nom du jeux vidéo"
      />
    </div>


    <div class="mb-3">
      <textarea
          class="form-control"
          id="description"
          rows="5"
          required
          v-model="produits.description"
          name="description"
          placeholder="Description du jeux vidéo"
      ></textarea>
    </div>


    <div class="mb-3">
      <input
          type="text"
          class="form-control"
          id="picture"
          required
          v-model="produits.picture"
          name="picture"
          placeholder="Url du jeux vidéo"
      />
    </div>

    <div class="mb-3">
      <input
          type="number"
          step="0.01"
          class="form-control"
          id="price"
          required
          v-model="produits.price"
          name="title"
          placeholder="Prix du jeux vidéo en €"
      />
    </div>

    <div class="mb-3">
      <input
          type="number"
          class="form-control"
          id="stock"
          required
          v-model="produits.stock"
          name="stock"
          placeholder="Nombre de jeux en stock"
      />
    </div>
      <!--Bouton de validation ajout-->
      <button class="btn btn-outline-warning" @click="sauverProduits">Valider</button>

  </div>
  <!--Si valide devient true on vide le formulaire-->
  <div v-else>
    <h4 class="text-info text-center">Le produit à bien été ajouter</h4>
    <button class="btn btn-outline-danger" @click="viderFormulaire">Retour</button>
  </div>

</template>

<script>
//Import du ficher de services pour appeler les fonction de requètes HTTP axios
import ProduitsDatasServices from "../../services/ProduitsDatasServices";

export default {
  //Nom du fichier courant
  name: "AjouterProduitComponent",
  //Data binding (accesseur et mutateur getter et setter)
  data(){
    return{
      //Nom de la collections
      produits:{
        "id": "",
        "title": "",
        "description": "",
        "picture": "",
        "price": "",
        "stock": "",
        publier: false
      },
      //Boolean est valide
      valide: false
    }
  },
  methods:{
    //Fonction sauvegarder le produit ( a appeler au click sur le bouton du formulaire)
    sauverProduits(){
      //On assigne les valeurs initialisé ci dessus au valeur name du formulaire (= $_POST[] en php)
      let donnees = {
        title: this.produits.title,
        description: this.produits.description,
        picture: this.produits.picture,
        price: this.produits.price,
        stock: this.produits.stock
      };
      //Appel de la methode de la casse du fichier services
      ProduitsDatasServices.ajouterProduit(donnees)
          //Creation d'une prommesse Js
      .then(response => {
        //On creer l'elements)
        this.produits.id = response.data.id
        //Debug
        console.log("Votre produit a été créer : " + response.data)
        //le booléen valide devient true et affiche le message et bouton grace a v-else
        this.valide = true
      })
          //Sinon on declence une erreur
      .catch(error => {
        console.log(error)
      })
    },

    //Fonction qui vide le formulaire
    viderFormulaire(){
      this.valide = false;
      this.produits = {}
    }
  }
}
</script>

<style scoped>

</style>