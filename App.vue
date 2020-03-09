<template>
    <div id="body">
        <immunization-component :config="config" :patientdata="patientData" :hospitaldata="hospitalData" @done="console"/>
    </div>

</template>
<script>
import ImmunizationComponent from './immunization/Immunization.vue'
import defaultConfig from './immunization/default'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
export default {
    components: {
        ImmunizationComponent
        },
    data() {
        return {
        config: defaultConfig,
        patientData: {
            reference: "tornadoalert@gmail.com"
        },
        
        hospitalData: {
            performer: [
                {
                    actor: {
                        reference: "doctor@healthgate.com"
                    }
                }
            ],
            location: {
                reference: "1236"
            }
        }
    }
    },
    methods: {
        console (...a) {
            console.log(...a);
        }
    }
}
</script>

<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css";
</style>
