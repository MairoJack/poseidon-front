<template>
  <Header></Header>
  <router-view></router-view>
  <br />
  <br />
  <br />
  <br />
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
