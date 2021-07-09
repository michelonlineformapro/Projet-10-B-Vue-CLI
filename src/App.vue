<template>
  <div id="app">
    <div id="nav">
      <!--APPEL LES ROUTES DE router/index.js-->
      <router-link to="/">ACCUEIL</router-link> |
      <router-link to="/produits"> PRODUITS</router-link> |
      <router-link to="/ajouter-produit">AJOUTER UN PRODUIT</router-link>
    </div>
    <!--Appel des vues-->
    <router-view/>
  </div>
</template>

<style>
html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #373940!important;
}
.container{
  background-color: white!important;
  border-radius: 5px!important;
  padding: 20px!important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: orange;
  text-decoration: none!important;
}

#nav a.router-link-exact-active {
  color: #42b983;

}
</style>
