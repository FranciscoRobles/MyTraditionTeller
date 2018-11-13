<template>
  <div class="about">
    <div class="about-wrapper">
      <h1>Welcome to MyStoryteller!</h1>
      <p>Most of the times, children do not have safe workspaces or environments to explore the basic functionalities 
        from computers. This happens either because parents do not trust or allow their kids to user their own devices,
        due to fear they might break them.</p>
      <a target="_blank" href="https://github.com/FranciscoRobles/MyTraditionTeller">View Documentation</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .about {
    width: calc(100% - 30px);
    height: calc(100vh - 50px);
    margin: 15px;
    padding: 15px;
    background: lightgray;
    .about-wrapper {
      text-align: left;
      width: calc(50% - 50px);
      margin: 25px;
      border-radius: 5px;
      background: white;
      padding: 30px 50px;
      a {
        font-weight: 600;
        text-decoration: none;
      }
    }
  }
</style>
