// V0.1

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
}`;

Vue.component('immunization-component', {
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
            console.log(vaccines)
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
                ).filter(a=>a)
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

        async createEncounterFHIR (patientData, hospitalData) {
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
        async postFHIR(fhir, patientData) {
            hash = await this.api.add(fhir, "Immunization")
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
                let encounterHash = await this.postFHIR(encounter, this.patientdata)
                fhirs.push(encounterHash);
                let immuns = this.setData.map(data => this.createImmunizationFHIR(data, {
                    patient: this.patientdata
                }, this.hospitaldata, {
                    encounter: {
                        reference: hash
                    }
                }));
                let hashList = await Promise.all(immuns.map(fhir=>this.postFHIR(fhir, this.patientdata)))
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
    },
    template: `#temp`
});

let DATA = new Vue({
    el: '#body',
    data: {
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
    },
    methods: {
        console (...a) {
            console.log(...a);
        }
    }
})