<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/activity">Activity</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 10px;
  background: #634691;
  color: #fff;
  text-align: left;
  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    padding-right: 30px;
    padding-left: 10px;
    &.router-link-exact-active {
      color: #f7931e;
    }
  }
}
</style>