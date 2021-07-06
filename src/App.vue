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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
