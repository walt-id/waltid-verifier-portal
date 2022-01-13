<template>
    <main class="_home d-flex justify-content-centr align-items-center">
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <img src="/favicon.png"/>
            <h2 class="fw-normal">
              Welcome to the
            </h2>
            <h2 class="fw-bold">
              Demo Verifier Portal
            </h2>
            <p class="lead text-muted">
              Connect your wallet and share<br>your credentials to access services.
            </p>
            <p>
              <a :href="'/verifier-api/present/?walletId=' + wallets[0].id + '&schemaUri=' + schemaUri" class="btn btn-primary my-2 fw-bold _btn">Connect Wallet</a>
            </p>
            <p class="text-muted fw-bold">© 2022 walt.id</p>
          </div>
        </div>
      </section>
    </main>
</template>

<script>
export default {
  data () {
    return {
      schemaUri: 'https://api.preprod.ebsi.eu/trusted-schemas-registry/v1/schemas/0x2488fd38783d65e4fd46e7889eb113743334dbc772b05df382b8eadce763101b'
    }
  },
  async asyncData ({ $axios }) {
    const wallets = await $axios.$get('/verifier-api/wallets/list')
    return { wallets }
  }
}
</script>

<style scoped>
._home{
  height: 100vh;
}
._btn{
  font-size: 18px;
  padding: 10px 55px;
}
</style>
