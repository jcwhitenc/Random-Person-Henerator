<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Instructions</router-link> |
      <router-link to="/People">People</router-link> |
      <router-link to="/filter">Person Filter</router-link>
    </div>
    <router-view />
    <div class='footer'>
      <a href="https://github.com/jcwhitenc/Random-Person-Henerator">GitHub</a>
    </div>
  </div>
</template>

<style>
  body {
    background: #fceed1
  }

  router-view {
    padding-bottom: 30px;
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
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .footer {
    width: 100%;
    height: 20px;
    position: fixed;
    bottom: 0;
    align-self: center;
    text-align: center;
    background: #fceed1
  }

  .footer a {
    color: black;
    text-decoration: none;
  }

  @import url('https://fonts.googleapis.com/css?family=Arimo|Inria+Sans|Questrial&display=swap');
</style>