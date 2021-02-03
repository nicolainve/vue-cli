<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Title msg="Hello, World" />
    <ul>
      <li v-for="(simpson, index) in simpsons" :key="index">
        {{ simpson.name }}
      </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Title from "./components/Title.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    Title
  },
  data() {
    return {
      simpsons: [],
      count: 0
    };
  },
  mounted() {
    this.axios
      .get(`${this.base_url}/characters`)
      .then(response => {
        console.log(response.data);

        // const { data } = response;

        this.simpsons = response.data;
        this.count = response.data.length;
      })
      .catch(error => {
        console.log(error.data);
      });
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
