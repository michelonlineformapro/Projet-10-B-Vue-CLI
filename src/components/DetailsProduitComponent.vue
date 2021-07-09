<template>
  <div v-if="produitCourant" class="container">
    <h4 class="text-info text-center">DÉTAILS DU JEUX VIDEO</h4>
    <!--formulaire de mise a jour-->
    <div class="mb-3">
    <input
        class="form-control"
        type="text"
        id="title"
        placeholder="Nom du jeux"
        v-model="produitCourant.title"
    />
    </div>

    <div class="mb-3">
      <textarea
          class="form-control"
          id="description"
          rows="5"
          placeholder="Description du jeux"
          v-model="produitCourant.description"
      ></textarea>
    </div>

    <div class="mb-3">
      <input
          type="text"
          class="form-control"
          id="picture"
          required
          v-model="produitCourant.picture"
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
          v-model="produitCourant.price"
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
          v-model="produitCourant.stock"
          name="stock"
          placeholder="Nombre de jeux en stock"
      />
    </div>

    <div class="mb-3">
      <label>Status :</label>
      <p>{{produitCourant.public ? "PUBLIER" : "EN ATTENTE"}}</p>
    </div>
    <!--Booleen publier / depublier-->
    <div class="mb-3">
      <button
          type="button"
          class="btn btn-outline-danger"
          v-if="produitCourant.public"
          @click="miseJourEtPublication(false)"
      >
        DEPUBLIER
      </button>
      <button v-else
              type="button"
              class="btn btn-outline-danger"
              @click="miseJourEtPublication(true)"
      >
        DEPUBLIER
      </button>
    </div>

    <!--bouton supprimer-->
    <div class="mb-3">
      <button
          class="btn btn-outline-info"
          @click="supprimerProduit"
      >
        SUPPRIMER
      </button>
    </div>

    <!--bouton mettre a jour-->
    <div class="mb-3">
      <button
          class="btn btn-outline-info"
          @click="majProduit"
      >
        METTRE A JOUR
      </button>
    </div>

    <!--Bouton de validation ajout-->
    <button class="btn btn-outline-warning">
      <router-link to="/produits">Retour</router-link>
    </button>
    <div class="text-center text-success">
      <!--message si ca marche-->
      <h4 class="text-success">{{ message }}</h4>
    </div>
    <!--Fin du formulaire-->
  </div>


  <!--Si id n'est pas connu = page 404 + message alert-->

  <div v-else class="container">
    <p class="alert alert-danger">Aucun jeux vidéo ne possède cette identifiant !</p>
    <button class="btn btn-outline-danger">
      <router-link to="/produits">Retour</router-link>
    </button>
  </div>


</template>

<script>
//get by id + update + supprimer un produits
import ProduitsDatasServices from "../../services/ProduitsDatasServices";

export default {
  name: "DetailsProduitComponent",
  data(){
    return{
      //Recuperer le produit courant
      produitCourant: null,
      //Message quand la mise a jour est ok
      message: ''
    };
  },

  methods:{
    produitParId(id){
      //requète HTTP get By ID +classe + methode axios
      ProduitsDatasServices.recupererProduitParId(id)
      //Promesse => le produit corant recup des données grace a id
      .then(response => {
        this.produitCourant = response.data;
        console.log(response.data)
      })
      //Sinon on declenche un erreur
      .catch(error => {
        console.log("Pas de produit pour cet ID !" + error)
      })
    },

    //Cette fonction est appelée au click pour publier et depublier un produit

    miseJourEtPublication(status){
      //creer un objet des données a mettre a jour (pre remplis le formulaire grace au v-model
      let donnees= {
        id: this.produitCourant.id,
        title: this.produitCourant.title,
        description: this.produitCourant.description,
        picture: this.produitCourant.picture,
        price: this.produitCourant.price,
        stock: this.produitCourant.stock,
        publier: status
      };
      //Appel du fichier de service HTTP requète CRUD AXIOS (pour les paramètre on recup ID et et l(objet donnée creer ci-dessus)
      ProduitsDatasServices.mettreAJourProduit(this.produitCourant.id, donnees)
      .then(response => {
        //Si ca marche on change le status en fonction de son etat true/false
        this.produitCourant.publier = status
        console.log(response.data)
      })
      //Sinon une erreur
      .catch(error => {
        console.log("Erreur lors de la mise a jour !" + error)
      })
    },

    //Cette fonction est appelée au @click sur le bouton mettre a jour du formulaire
    majProduit(){
      //Appel du fider de services crud requète HTTP
      ProduitsDatasServices.mettreAJourProduit(this.produitCourant.id, this.produitCourant)
      .then(response => {
        console.log(response.data)
        //Si ca marche on affiche le message de réussite
        this.message = "Le jeux video a bien été mis a jour !"
        //ici on peu faire une redirection avec un setTimeOut
      })
      .catch(error => {
        console.log("Erreur lors de la mise a jour " + error)
      })
    },

    //Cette fonction est appelée au click sur le bouton supprimer
    supprimerProduit(){
      alert('supprimer Produit')
    }
  },

  //Dans le cycle de vie Vuejs on declénche la fonction produitParId quand le composant est monté
  //instance de vue + beforeCreate + created (data-binding getter et setter= puis beforeMounted et monted() intercepte les modifications dur la page (beforeUpdated et updated)
  mounted() {
    this.message = '';
    this.produitParId(this.$route.params.id) //localhost:3000/produits/:id
  }

}
</script>

<style scoped>
a{
  text-decoration: none;
  color: #42b983;
}
</style>