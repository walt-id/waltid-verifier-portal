<template>
  <main class="_home d-flex justify-content-centr align-items-center">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-4 col-md-6 mx-auto">
          <img src="/favicon.png" />

          <h2 class="fw-normal">Thanks, you just</h2>
          <h2 class="fw-bold mb-2">presented credentials.</h2>

          <div v-for="(vp_result, vp_idx) in result.vps" :key="vp_idx">
            <b>{{ vp_idx + 1 }}. Verifiable Presentation:</b>
            <div v-for="data in vp_result.vcs" id="accordion1" v-bind:key="data.id"
              class="accordion my-2">
              <div class="accordion-item">
                <h2 :id="
                    'heading' +
                        vp_result.vcs.indexOf(
                            data
                        )
                " class="accordion-header">
                  <button :aria-controls="
                      'collapse' +
                          vp_result.vcs.indexOf(
                              data
                          )
                  " :data-bs-target="
                      '#collapse' +
                          vp_result.vcs.indexOf(
                              data
                          )
                  " aria-expanded="false" class="accordion-button collapsed" data-bs-toggle="collapse" type="button">
                    <i class="bi bi-check-circle-fill text-primary me-2"></i>
                    {{ data.type[data.type.length - 1] }}
                  </button>
                </h2>
                <div :id="
                    'collapse' +
                        vp_result.vcs.indexOf(
                            data
                        )
                " :aria-labelledby="
                    'heading' +
                        vp_result.vcs.indexOf(
                            data
                        )
                " class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body text-start">
                    <!-- VerifiableId -->
                    <div v-if="
                        data.type[
                            data.type.length - 1
                        ] == 'VerifiableId'
                    ">
                      <span>
                        <i class="bi bi-check"></i>
                        Family Name:
                        {{
                        data.credentialSubject
                        .familyName
                        }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        First Name:
                        {{
                        data.credentialSubject
                        .firstName
                        }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Date Of Birth:
                        {{
                        data.credentialSubject
                        .dateOfBirth
                        }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Personal Identifier:
                        {{
                        data.credentialSubject
                        .personalIdentifier
                        }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Name At Birth:
                        {{
                        data.credentialSubject
                        .nameAndFamilyNameAtBirth
                        }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Place Of Birth:
                        {{
                        data.credentialSubject
                        .placeOfBirth
                        }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Current Address:
                        {{
                        data.credentialSubject
                        .currentAddress
                        }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Gender:
                        {{
                        data.credentialSubject
                        .gender
                        }}
                      </span>
                    </div>
                    <!-- OpenBadgeCredential -->
                    <div div v-if="
                        data.type[
                            data.type.length - 1
                        ] == 'OpenBadgeCredential'
                    ">
                      <span>
                        <i class="bi bi-check"></i>
                        ID:
                        {{ data.credentialSubject.id }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Type:
                        {{ data.credentialSubject.type }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Achievment Type:
                        {{ data.credentialSubject.achievement.type }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Achievment Name:
                        {{ data.credentialSubject.achievement.name }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Achievement Description:
                        {{ data.credentialSubject.achievement.description }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Criteria Type:
                        {{ data.credentialSubject.achievement.criteria.type }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Criteria Narrative:
                        {{ data.credentialSubject.achievement.criteria.narrative }}
                      </span>
                    </div>

                    <!-- EuropeanBankIdentity -->
                    <div v-if="
                        data.type[
                            data.type.length - 1
                        ] == 'EuropeanBankIdentity'
                    ">
                      <span>
                        <i class="bi bi-check"></i>
                        ID:
                        {{ data.credentialSubject.id }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Family name:
                        {{
                        data.credentialSubject
                        .familyName
                        }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Given names:
                        {{
                        data.credentialSubject
                        .givenName
                        }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Date of birth:
                        {{
                        data.credentialSubject
                        .birthDate
                        }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Country of birth:
                        {{
                        data.credentialSubject
                        .placeOfBirth.country
                        }}
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-check"></i>
                        Locality of birth:
                        {{
                        data.credentialSubject
                        .placeOfBirth.locality
                        }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="vp_result.verification_result.valid" class="alert alert-success mt-4" role="alert">
              <strong>The verification was successful</strong>
              <br />
              Verification Policies <br />
              {{
              JSON.stringify(
              vp_result.verification_result.policyResults,
              undefined,
              2
              )
              }}
            </div>
            <div v-else class="alert alert-danger mt-4" role="alert">
              <strong>The verification failed</strong> <br />
              Verification Policies <br />
              {{
              JSON.stringify(
              vp_result.verification_result.policyResults,
              undefined,
              2
              )
              }}
            </div>
          </div>
          <div v-if="result.isValid" class="alert alert-secondary mt-4" role="alert">
            Authenticated session established <br />
            <span>
              <i class="bi bi-dot"></i>
              <a v-if="
                  authenticatedDID ===
                      'View authenticated DID'
              " class="text-dark" href="#" @click="viewAuthenticatedDID">View authenticated DID</a>
              <a v-else class="text-dark" href="#" @click="viewAuthenticatedDID">{{ authenticatedDID.slice(0, 30)
              }}...</a>
            </span>
            <br />
            <span>
              <i class="bi bi-dot"></i>
              <a v-if="access_token === 'View session token'" class="text-dark" href="#" @click="viewSessionToken">View
                session token</a>
              <a v-else class="text-dark" href="#" @click="viewSessionToken">{{ access_token.slice(0, 30) }}...</a>
            </span>
          </div>
          <div v-else class="alert alert-secondary mt-4" role="alert">
            No authenticated session established! <br />
            <span>
              <i class="bi bi-dot"></i>
              <a class="text-dark" href="#" @click="viewAuthenticatedDID">No authenticated DID</a>
            </span>
            <br />
            <span>
              <i class="bi bi-dot"></i>
              <a class="text-dark" href="#" @click="viewSessionToken">No session token</a>
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
  window.opener.location = window.location;
  window.close();
}
export default {
  name: "success.vue",
  data() {
    return {
      access_token: "View session token",
      authenticatedDID: "View authenticated DID"
    };
  },
  async asyncData({ $axios, route }) {
    console.log(route.query.access_token);
    let result = {};
    let protectedData = {};
    if (route.query.access_token != null) {
      await $axios
        .get(
          "/verifier-api/auth?access_token=" +
          route.query.access_token
        )
        .then(response => {
          result = response.data;
          console.log(response.data);
          return $axios.get("/verifier-api/protected", {
            headers: {
              Authorization: "Bearer " + result.auth_token
            }
          });
        })
        .then(dataResponse => {
          protectedData = dataResponse.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
    return { result, protectedData };
  },
  methods: {
    viewSessionToken() {
      this.access_token = this.result.auth_token;
    },
    viewAuthenticatedDID() {
      this.authenticatedDID = this.result.subject;
    }
  }
};
</script>

<style scoped>
._home {
  height: 100vh;
}

._btn {
  font-size: 18px;
  padding: 10px 55px;
}
</style>
