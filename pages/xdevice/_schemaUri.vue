<template>
  <main class="_home d-flex justify-content-centr align-items-center">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <div class="text-center">
            <h1>Scan this code with your identity wallet:</h1>
          </div>
          <div class="text-center">
            <canvas :id="'qr-code'" />
          </div>
          <div class="text-center small">
            Request ID: {{ requestInfo.requestId }}
            <pre><code>{{ requestInfo.url }}</code></pre>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
	
<script>
import QRious from "qrious"
export default {
  async asyncData({ $axios, route }) {
    const requestInfo = await $axios.$get('/verifier-api/presentXDevice?schemaUri=' + route.params.schemaUri)
    console.log(requestInfo)
    return { requestInfo }
  },
  mounted() {
    new QRious({
        element: document.getElementById('qr-code'),
        value: this.requestInfo.url,
        size: 300
      })
  }
};
</script>
	
<style scoped>
</style>