<template>
    <main class="_home d-flex justify-content-centr align-items-center">
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-4 col-md-6 mx-auto">
            <img src="/favicon.png"/>
            <h2 class="fw-normal">
              Thanks, you just
            </h2>
            <h2 class="fw-bold mb-2">
              presented credentials.
            </h2>
            <div class="accordion my-2" id="accordion1" v-for="data in result.vp_token.verifiableCredential" v-bind:key="data.id">
              <div class="accordion-item">
                <h2 class="accordion-header" :id="'heading'+result.vp_token.verifiableCredential.indexOf(data)">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+result.vp_token.verifiableCredential.indexOf(data)" aria-expanded="false" :aria-controls="'collapse'+result.vp_token.verifiableCredential.indexOf(data)">
                     <i class="bi bi-check-circle-fill text-primary me-2"></i>
                    {{data.type[data.type.length-1]}}
                  </button>
                </h2>
                <div :id="'collapse'+result.vp_token.verifiableCredential.indexOf(data)" class="accordion-collapse collapse" :aria-labelledby="'heading'+result.vp_token.verifiableCredential.indexOf(data)" data-bs-parent="#accordionExample">
                  <div class="accordion-body text-start">
                    <span>
                      <i class="bi bi-check"></i>
                      Family Name: {{data.credentialSubject.familyName}}
                    </span>
                    <br>
                    <span>
                      <i class="bi bi-check"></i>
                      First Name: {{data.credentialSubject.firstName}}
                    </span>
                    <br>
                    <span>
                      <i class="bi bi-check"></i>
                       Date Of Birth: {{data.credentialSubject.dateOfBirth}}
                    </span>
                    <br>
                    <span>
                      <i class="bi bi-check"></i>
                      Personal Identifier: {{data.credentialSubject.personalIdentifier}}
                    </span>
                    <br>
                    <span>
                      <i class="bi bi-check"></i>
                      Name At Birth: {{data.credentialSubject.nameAndFamilyNameAtBirth}}
                    </span>
                    <br>
                    <span>
                      <i class="bi bi-check"></i>
                      Place Of Birth: {{data.credentialSubject.placeOfBirth}}
                    </span>
                    <br>
                    <span>
                      <i class="bi bi-check"></i>
                      Current Address: {{data.credentialSubject.currentAddress}}
                    </span>
                    <br>
                    <span>
                      <i class="bi bi-check"></i>
                      Gender: {{data.credentialSubject.gender}}
                    </span>

                  </div>
                </div>
              </div>
            </div>
            <div v-if="result.verification_result.valid" class="alert alert-success mt-4" role="alert">
              <strong>The verification was successful</strong>
              <br>
              Verification Policies
              <br>
              {{JSON.stringify(result.verification_result.policyResults)}}
            </div>
            <div v-else class="alert alert-danger mt-4" role="alert">
              <strong>The verification failed</strong>
              <br>
              Verification Policies
              <br>
              {{JSON.stringify(result.verification_result.policyResults)}}
            </div>
            <div class="alert alert-secondary mt-4" role="alert">
              Authenticated session established
              <br>
              <span>
                <i class="bi bi-dot"></i>
                <a href="#" v-if="authenticatedDID === 'View authenticated DID'" class="text-dark" @click="viewAuthenticatedDID">View authenticated DID</a>
                <a href="#" v-else class="text-dark" @click="viewAuthenticatedDID">{{authenticatedDID.slice(0,30)}}...</a>
              </span>
              <br>
              <span>
                <i class="bi bi-dot"></i>
                <a href="#" v-if="access_token === 'View session token'" class="text-dark" @click="viewSessionToken">View session token</a>
                <a href="#" v-else class="text-dark" @click="viewSessionToken">{{access_token.slice(0,30)}}...</a>
              </span>
            </div>
            <p class="text-muted fw-bold mt-5">© 2022 walt.id</p>
          </div>
        </div>
      </section>
    </main>
</template>


<script>
if (window.opener != null) {
  window.opener.location = window.location
  window.close()
}
export default {
  name: 'success.vue',
  data (){
    return{
      access_token:  'View session token',
      authenticatedDID: 'View authenticated DID'
    }
  },
  async asyncData ({ $axios, route }) {
    console.log(route.query.access_token)
    let result = {}
    let protectedData = {}
    if (route.query.access_token != null) {
      await $axios.get('/verifier-api/auth?access_token=' + route.query.access_token)
        .then((response) => {
          result = response.data
          console.log(response.data)
          return $axios.get('/verifier-api/protected', {
            headers: {
              Authorization: 'Bearer ' + result.auth_token
            }
          })
        })
        .then((dataResponse) => {
          protectedData = dataResponse.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
    return { result, protectedData }
  },
  methods:{
    viewSessionToken (){
      this.access_token = this.result.auth_token;
    },
    viewAuthenticatedDID(){
      this.authenticatedDID = this.result.subject
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
