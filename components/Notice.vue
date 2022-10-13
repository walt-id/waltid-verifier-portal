<template>
    <div :class="this.isShown === true ? 'navbar navbar-expand-lg bg-primary _notice _fadeInDown': 'hide'"
         style="position: absolute; width: 100%;">
        <div class="container-fluid">
            <div class="d-flex col-12">
                <div class="col"></div>
                <div class="col-10 text-center text-white d-flex align-items-center justify-content-center">
                    <p><img :alt="this.logo.alt" :src="this.logo.path" class="mx-2"
                            height="25px"/><strong>Notice:</strong> {{ text }} </p>
                </div>
                <div class="col text-white d-flex justify-content-end align-items-center" style="cursor: pointer">
                    <a @click="hideNotice"> <i class="bi bi-x-lg"></i> </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {config} from '/config.js'

export default {
    name: "Notice",
    props: ['text'],
    data() {
        return {
            copyright: config.copyright,
            logo: config.whiteLogo,
            isShown: true
        }
    },
    methods: {
        hideNotice() {
            this.isShown = false
        }
    }

}
</script>
