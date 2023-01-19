<template>
    <div>
        <header>
            <Notice
                text="In practice the verifier would verify the credential(s) and eventually provide access to products and services">
            </Notice>
        </header>
        <main class="_home d-flex justify-content-centr align-items-center">
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <img src="/favicon.png" alt="Logo" />
                        <h2 class="fw-normal">
                            Welcome to the </h2>
                        <h2 class="fw-bold">
                            IOTA Demo Verifier Portal </h2>
                        <p class="lead text-muted">
                            Authenticate yourself via sharing a W3C Verifiable Credential bound to your IOTA DID. </p>
                        <p>
                            <a :href="getPresentationUrl(wallets[0].id, vidType)"
                                class="btn btn-primary my-2 fw-bold _btn">Login with <b>IOTA</b></a>
                                <a :href="'/xdevice/' + encodeURIComponent(vidType)"
                                    class="btn btn-primary my-2 fw-bold _btn"><i class="bi bi-upc-scan" /></a>
                        </p>
                        <p class="text-muted fw-bold"> {{ $config.copyright }} </p>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { config } from "../config";
export default {
    data() {
        return {
            obcType: "OpenBadgeCredential",
            vidType: 'VerifiableId',
            bidType: 'EuropeanBankIdentity'
        }
    },
    async asyncData({ $axios }) {
        const wallets = await $axios.$get(`/verifier-api/${config.tenantId}/wallets/list`)
        return { wallets }
    },
    methods: {
        encodeURIComponent(str) {
            return encodeURIComponent(str)
        },
        getPresentationUrl(walletId, type) {
            return `/verifier-api/${config.tenantId}/present/?walletId=${walletId}&vcType=${type}`
        }
    }
}
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
