<template>
  <Header></Header>
  <div style="margin-top: 80px">
    <router-view></router-view>
  </div>
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

<style scoped>
Footer {
  margin-top: 80px;
}
</style>
