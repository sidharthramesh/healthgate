<template>
  <section class="section">
                <div class="container">
                    <h1 class="title">Immunization Details</h1>
                        <!-- Months of immunization -->
                        <div class="tabs">
                            <ul>
                                <template v-for="(month,i) in months">
                                    <li :class="{ 'is-active': currentMonth === month }" @click="openMonth(month)" :key="i"><a>{{ month }}</a></li>
                                </template>
                            </ul>
                          </div>
                        <div class="container">
                            <!-- Age and Date at which age is attained -->
                            <div class="level is-mobile">
                                <div class="level-left">
                                    <h1 class="title">
                                        {{ currentMonth }}
                                    </h1>
                                </div>
                                <div class="level-right">
                                    <h1 class="subtitle">
                                        {{ ptn_age }}
                                    </h1>
                                </div>
                            </div>
                            <!-- Vaccinations to be given -->
                            <template v-for="(vaccine,i) in vaccines">
                            <div class="level is-mobile" :key="i">
                                    <div class="level-left">
                                        <h3 class="is-size-4">{{vaccine.vaccineCode.text}}</h3>
                                    </div>
                                    <div class="level-right">
                                        <template v-if="getPatientsDateFor(vaccine) === false && !isSet(vaccine)">
                                            <button class="button has-text-primary" @click="setVaccineDate(vaccine)">
                                                <span class="icon">
                                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                                </span>
                                                <span class="is-size-6 is-uppercase has-text-weight-semibold">
                                                    Set date
                                                </span>
                                            </button>
                                        </template>
                                        <template v-else-if="isSet(vaccine)">
                                            <div class="button is-primary is-inverted" style="border: none;" @click="setVaccineDate(vaccine)">
                                                <span class="icon">
                                                    <i class="fa fa-check" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                        </template>
                                        <template v-else>
                                            <div class="button" disabled style="border: none;">
                                                <span class="subtitle">
                                                    {{ getPatientsDateFor(vaccine) }}
                                                </span>
                                            </div>
                                        </template>
                                        
                                    </div>
                                </div>
                            </template>
                            <!-- Done button -->
                            <template v-if="doneYet">
                                <div class="level is-mobile">
                                    <div class="level-left">
                                    </div>
                                    <div class="level-right">
                                        <!-- Remove is-loading to see text -->
                                        <button class="button is-primary" :class="{ 'is-loading': sending }" @click="done()"> 
                                                <span class="icon">
                                                    <i class="fa fa-check" aria-hidden="true"></i>
                                                </span>
                                                <span class="is-size-6 is-uppercase has-text-weight-semibold">
                                                    Done
                                                </span>
                                        </button>
                                    </div>
                                </div>
                            </template>
                        </div>
                </div>
            </section>
</template>

<script>
import MedBlocks from 'medblocks'
let IMMUNIZATION_FHIR = `{
    "resourceType" : "Immunization",
    "status" : "completed",
    "patient" : {
        "reference": ""
    },
    "encounter" : {
        "reference": ""
    },
    "occurrenceDateTime" : "",
    "primarySource" : true,
    "performer" : [
        {
            "actor" : {
                "reference": ""
            }
        }
    ],
    "note" : [
        {
            "text": "HealthGate Immunization Component v0.1"
        }
    ],
    "education" : [{
        "documentType" : "HealthGate Passport",
        "publicationDate" : "05-03-20202020-03-05T07:22:31.345Z"
    }]
}`
export default {
    props: ['config', 'patientdata', 'hospitaldata'],
    data () {
        return {
            currentMonth: '',
            tabData: [],
            setData: [],
            sending: false,
            doneYet: false,
            api: undefined,
            patientDetails: {
                vaccines: [],
                patient: undefined
            }
        };
    },
    computed: {
        _config () {
            return JSON.parse(JSON.stringify(this.config));
        },
        months () {
            return this._config.map(a => a.name);
        },
        vaccines () {
            if (this.tabData instanceof Array) {
                return this.tabData;
            }
            else {
                return [];
            }
        },
        ptn_age () {
            return "";
        },
        ptn_info () {
            return this.patientDetails
        }
    },
    methods: {
        async getPatientDetails (patientData) {
            var vaccines = await this.api.list(patientData.reference, "Immunization")
            var patient = await this.api.list(patientData.reference, "Patient")
            // console.debug(vaccines)
            patient = await Promise.all(patient.map(hash=>this.api.get(hash)))
            vaccines = (await Promise.all(vaccines.map(hash=>this.api.get(hash)))).map(
                a=>{
                    try{
                        return JSON.parse(a)
                    }
                    catch (err) {
                        return
                    }
                }
                ).filter(a=>{
                    return a && a.resourceType=="Immunization"
                    })
            return {
                vaccines: vaccines,
                patient: patient
            }
        },

        openMonth (month) {
            this.currentMonth = month;
            let monthObj = this._config.find(a => a.name === month);
            this.tabData = monthObj.vaccines.map(a => {
                a.occurrenceDateTime = a.occurrenceDateTime || undefined;
                return a;
            });
        },

        setVaccineDate (vaccine) {
            this.doneYet = true;
            vaccine.occurrenceDateTime = new Date().toISOString();
            this.setData.push(vaccine);

        },

        isSet (vaccine) {
            return (this.setData.find(v => v.vaccineCode.text === vaccine.vaccineCode.text) !== undefined)
        },

        getPatientsDateFor (vaccine) {
            let data = this.ptn_info.vaccines.find(v => v.vaccineCode.text === vaccine.vaccineCode.text);
            return (data && data.status === 'completed') ? new Date(data.occurrenceDateTime).toLocaleDateString("en-IN") : false;
        },

        createEncounterFHIR (patientData, hospitalData) {
            return JSON.stringify({
                "resourceType": "Encounter",
                "status": "finished",
                "class": {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                  "code": "AMB"
                },
                "subject": {
                  "reference": patientData.reference
                },
                "participant": [
                  {
                    "individual": {
                      "reference": hospitalData.performer[0].actor.reference
                    }
                  }
                ],
                "period": {
                  "start": new Date().toISOString()
                },
                "serviceProvider": {
                  "reference": hospitalData.performer[0].actor.reference
                }
        })},

        createImmunizationFHIR (immunization, patientData, hospitalData, encounter) {
            let fhir = JSON.parse(IMMUNIZATION_FHIR);
            immunization = JSON.parse(JSON.stringify(immunization));
            patientData = JSON.parse(JSON.stringify(patientData));
            hospitalData = JSON.parse(JSON.stringify(hospitalData));
            encounter = JSON.parse(JSON.stringify(encounter));
            return JSON.stringify(Object.assign(fhir, immunization, patientData, hospitalData, encounter));
        },

        validate () {
            if (this.setData.length > 0 &&
                this.patientdata &&
                this.hospitaldata ) {
                return true;
            }
            else {
                throw new Error('Not valid data');
            }
        },
        async postFHIR(fhir, patientData, resourceType) {
            let hash = await this.api.add(fhir, resourceType)
            await this.api.permit(hash, patientData.reference)
            return hash
        },
        async done () {
            // Complie and emit
            if (this.validate()) {
                // Compile
                this.sending = true;
                let fhirs = [];
                let encounter = this.createEncounterFHIR(this.patientdata, this.hospitaldata);
                let encounterHash = await this.postFHIR(encounter, this.patientdata, "Encounter")
                fhirs.push(encounterHash);
                let immuns = this.setData.map(data => this.createImmunizationFHIR(data, {
                    patient: this.patientdata
                }, this.hospitaldata, {
                    encounter: {
                        reference: encounterHash
                    }
                }));
                let hashList = await Promise.all(immuns.map(fhir=>this.postFHIR(fhir, this.patientdata, "Immunization")))
                fhirs = fhirs.concat(hashList);
                //Set this 
                this.patientDetails = await this.getPatientDetails(this.patientdata)
                this.sending = false;
                this.setData = [];
                this.doneYet = false;
                this.$emit('done', fhirs);
            }
        }
    },
    async mounted () {
        this.openMonth(this.months[0]);
        this.api = await new MedBlocks()
        await this.api.login(this.hospitaldata.performer[0].actor.reference)
        this.patientDetails = await this.getPatientDetails(this.patientdata)
    }
}
</script>

<style>

</style>