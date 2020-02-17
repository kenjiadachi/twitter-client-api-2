<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxtpj
      </h1>
      <h2 class="subtitle">
        My awe-inspiring Nuxt.js
      </h2>
      <button
         v-if="!$store.state.isLoggedin"
         @click="signinWithTwitter"
         class="button is-info is-large"
       >
         Twitterアカウントでログイン
       </button>
       <div v-if="$store.state.isLoggedin">
         ようこそ、 {{ $store.state.userName }}さん。
         <button @click="signOut" class="button is-info is-large">
           ログアウト
         </button>
       </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  created () {
    console.log(process.env.apiBaseUrl)
  },
  mounted () {
    this.$store.dispatch('twitterAuthStateChanged')
  },
  methods: {
    signinWithTwitter () {
      this.$store.dispatch('twitterSignIn')
    },
    signOut () {
      this.$store.dispatch('twitterSignOut')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
