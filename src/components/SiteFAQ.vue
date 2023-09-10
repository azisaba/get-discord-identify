<template>
  <div class="qa-flame">
    <h2>このサイトって何？</h2>
    <dl class="qa">
      <dt>このサイトって何ですか？</dt>
      <dd>Amazonギフト券でアジ鯖に寄付をしてくれた方のDiscordIDを取得して、申請フォームに自動で挿入するサイトです。</dd>
      <dt>なんでDiscordが必要なのですか？</dt>
      <dd>ギフト券確認後に、購入するアイテムの100%OFFクーポンをDiscordのDMに配信する為です。</dd>
      <dt>どんな情報を取得しますか？</dt>
      <dd>ID、ユーザネーム、加入サーバを取得します。</dd>
      <dt>所属サーバは何に使いますか？</dt>
      <dd>アジ鯖公式Discordサーバの加入状況を確認するのに使います。</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@media screen and (max-width: 900px) {
  .qa-flame {
    margin-top: 3em;
    text-align: left;
  }
}

@media screen and (min-width: 901px){
  .qa-flame {
    margin-top: 3em;
    text-align: left;
    width: 75%;

    margin-left: 13%;
  }
}

@media screen and (min-width: 1600px){
  .qa-flame {
    margin-top: 3em;
    text-align: left;
    width: 50%;

    margin-left: 25%;
  }
}


.qa-flame h2{
  text-align: center;
}

.qa dt {
  margin-bottom: .5em;
  color: aliceblue;
  font-weight: 600;
}

.qa dt::before,
.qa dd::before {
  margin-right: .4em;
}

.qa dt::before {
  content: "Q.";
}

.qa dd {
  margin: 0 0 2.5em;
  padding: 1em 1.5em;
  background-color: dimgray;
  color: azure;
}

.qa dd::before {
  content: "A.";
}
</style>