<template>
  <h1>アジ鯖寄付 Amazonギフト券コード受付サイト</h1>
  <DiscordLogin />
  <SiteFAQ />
  <CustomFooter />
</template>

<script>
import DiscordLogin from "@/components/DiscordLogin";
import SiteFAQ from "@/components/SiteFAQ";
import CustomFooter from "@/components/Footer";

export default {
  name: 'App',
  components: {
    DiscordLogin,
    SiteFAQ,
    CustomFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
*{
  margin:0;
  padding: 0;
}

body {
  background-color: #333333;
  color: #f2f2f2;
  height: 100%;
}

#wrapper {
  width: 100%;
  position:relative;
  min-height: 100%;
}

.content {
  padding-bottom: 100px;
}
</style>
