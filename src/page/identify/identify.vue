<script>
import DiscordLogin from "@/components/DiscordLogin";
import NotDiscordJoined from "@/components/NotDiscordJoined";
import CustomFooter from "@/components/Footer";
import Loading from "@/components/Loading";
//import 'dotenv/config';

export default {
  data(){
    return {
      isComplete: true,
      hasUserData: true,
      isJoindDiscord: true,
      finishLoad: false
    }
  },
  components: {
    DiscordLogin,
    NotDiscordJoined,
    CustomFooter,
    Loading
  },
  created() {
      const code = (new URLSearchParams(location.search)).get("code")

      if(code===null){
        this.hasUserData = false;
        this.isComplete = false;
        return;
      }

      const options = {
        method: 'POST',
        body: JSON.stringify({
          'code': code
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      fetch(process.env.VUE_APP_API_URL, options)
          .then(async r=>{
            console.log(r.ok)
            if(!r.ok){
              this.hasUserData = false;
              this.isComplete = false;
              return;
            }

            const res = await r.json()

            if(!res.joinedDiscord){
              this.isJoindDiscord = false;
              this.isComplete = false;
              return;
            }

            location.href =
                `${process.env.VUE_APP_GOOGLE_FORM_URL}&${process.env.VUE_APP_GOOGLE_FORM_URL_QUERY1}=${res.username}&${process.env.VUE_APP_GOOGLE_FORM_URL_QUERY2}=${res.id}`
          })
          .catch(e=>{
            console.log(e)
            this.hasUserData = false;
            this.isComplete = false;
          })
          .finally(()=>{
            this.finishLoad = true;
          })
  }
}
</script>


<template>
  <h1 v-if="!isComplete">次のステップに進めません！</h1>
  <Loading v-if="!finishLoad" />
  <NotDiscordJoined v-if="!isJoindDiscord" />
  <h3 v-if="!hasUserData">認証に失敗しました。再ログインしてください。</h3>
  <DiscordLogin v-if="!isComplete" />
  <div id="app">
    <div class="content">
    </div>
  <CustomFooter />
  </div>
</template>

<style>
html, body {
  margin: 0;
  background-color: #333333;
  color: #f2f2f2;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  /**margin-top: 60px;**/
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  padding-top: 2vh;
  padding-bottom: 2px;
  flex: 1;
}

</style>