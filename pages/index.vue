<template>
    <div>
        <header>
            <Notice
                text="Job application deadline is: 01.01.2025">
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
                             NEOM company job application board</h2>
                        <p class="lead text-muted">
                            Connect your wallet and share<br>your credentials to apply for the job offering. </p>
                        <p>
                            <a :href="getPresentationUrl(wallets[0].id, vidType)"
                                class="btn btn-primary my-2 fw-bold _btn">Connect Wallet using <b>Verifiable ID</b></a>
                                <a :href="'/xdevice/' + encodeURIComponent(vidType)"
                                    class="btn btn-primary my-2 fw-bold _btn"><i class="bi bi-upc-scan" /></a>

                            <a :href="getPresentationUrl(wallets[0].id, obcType)"
                                class="btn btn-primary my-2 fw-bold _btn">Connect Wallet using <b>Open Badge Credential</b></a>
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
