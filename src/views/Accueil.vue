<template>
  <div>
    <!--Appel du composant sous forme balise HTML-->
    <AccueilComponent></AccueilComponent>
  </div>
</template>

<script>
//Import du composant AccueilComponent component/AccueilComponent
import AccueilComponent from "../components/AccueilComponent";


export default {
  name: "Accueil",
  //Appel du composnant importer
  components:{
    AccueilComponent
  }
}
</script>

<style scoped>

</style>