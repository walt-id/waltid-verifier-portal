<template>
    <main class="_home d-flex justify-content-centr align-items-center">
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-4 col-md-6 mx-auto">
            <img src="/favicon.png"/>
            <h2 class="fw-normal">
              Thanks, you just
            </h2>
            <h2 class="fw-bold">
              presented credentials.
            </h2>
            <div class="accordion mt-4" id="accordion1">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <i class="bi bi-check-circle-fill text-primary me-2"></i>
                    [Credential name]
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body text-start">
                    <span>
                      <i class="bi bi-check"></i>
                      issuer
                    </span>
                    <br>
                    <span>
                      <i class="bi bi-check"></i>
                      Signertures
                    </span>
                    <br>
                    <span>
                     <a href="#" class="text-dark">View credential</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion my-2" id="accordion1">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <i class="bi bi-x-circle-fill me-2 text-muted"></i>
                    [Credential name]
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body text-start">
                    <span>
                      <i class="bi bi-check"></i>
                      issuer
                    </span>
                    <br>
                    <span>
                      <i class="bi bi-check"></i>
                      Signertures
                    </span>
                    <br>
                    <span>
                     <a href="#" class="text-dark">View credential</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="alert alert-secondary mt-4" role="alert">
              Authenticated session established
              <br>
              <span>
                <i class="bi bi-dot"></i>
                <a href="#" class="text-dark">View authenticated  DID</a>
              </span>
              <br>
              <span>
                <i class="bi bi-dot"></i>
                <a href="#" class="text-dark">View session token</a>
              </span>
            </div>
            <p class="text-muted fw-bold mt-5">© 2022 walt.id</p>
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
