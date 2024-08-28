<template>
  <div id="app">
    <div class="content">
      <h1>アジ鯖寄付 Amazonギフト券コード受付サイト</h1>
      <DiscordLogin />
      <SiteFAQ />
    </div>
    <CustomFooter />
  </div>
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
  /**margin-top: 60px;**/
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
*{
  margin:0;
  padding: 0;
}

html, body {
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
  padding-top: 2vh;
  padding-bottom: 2px;
  flex: 1;
}

</style>
