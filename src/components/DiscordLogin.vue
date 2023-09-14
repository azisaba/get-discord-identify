<template>
  <div class="message">
    Amazonギフト券で寄付をされる方は、ボタンからDiscordにログインしてください。<br>
    ログイン後、Google Formが表示されますので記入を進めてください。
  </div>
  <a class="discord_login_button" @click="clickDiscordLogin">Discordにログインする！</a>
</template>

<script>
export default {
  methods: {
    clickDiscordLogin() {
      const url = process.env.VUE_APP_DISCORD_OAUTH_URL;
      location.href = url;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  margin-bottom: 1em;
}

.discord_login_button {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.discord_login_button {
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  height: 64px;
  padding: 8px 16px 8px 8px;
  font-family: sans-serif;
  font-size: 16px;
  color: #fff;
  text-align: center;
  overflow-wrap: anywhere;
  background-color: #7289da;
  border-radius: 32px; /* (buttonの高さ / 2) の値 */
}


@media (any-hover: hover) {
  .discord_login_button {
    transition: background-color 0.2s;
  }

  .discord_login_button:hover {
    background-color: #4d6bd1;
  }
}

</style>