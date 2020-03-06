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
            doneYet: false
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
            return {
                vaccines: [
                    {
                        vaccineCode: {
                            text: "BCG 0"
                        },
                        completed: true,
                        occurrenceDateTime: "2020-03-06T10:14:40.854Z"
                    }
                ]
            }
        }
    },
    methods: {
        getPatientDetails () {},

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
            return (data && data.completed) ? data.occurrenceDateTime : false;
        },

        createEncounterFHIR (patientData, hospitalData) {
            return {
                reference: "1234"
            };
        },

        createImmunizationFHIR (immunization, patientData, hospitalData, encounter) {
            let fhir = JSON.parse(IMMUNIZATION_FHIR);
            immunization = JSON.parse(JSON.stringify(immunization));
            patientData = JSON.parse(JSON.stringify(patientData));
            hospitalData = JSON.parse(JSON.stringify(hospitalData));
            encounter = JSON.parse(JSON.stringify(encounter));
            return Object.assign(fhir, immunization, patientData, hospitalData, encounter);
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

        done () {
            // Complie and emit
            if (this.validate()) {
                // Compile
                this.sending = true;
                let fhirs = [];
                let encounter = this.createEncounterFHIR(this.patientata, this.hospitaldata);
                fhirs.push(encounter);
                let immuns = this.setData.map(data => this.createImmunizationFHIR(data, {
                    patient: this.patientdata
                }, this.hospitaldata, {
                    encounter: encounter
                }));
                fhirs = fhirs.concat(immuns);
                this.sending = false;
                this.setData = [];
                this.$emit('done', fhirs);
            }
        }
    },
    mounted () {
        this.openMonth(this.months[0]);
    },
    template: `#temp`
});

let DATA = new Vue({
    el: '#body',
    data: {
        config: defaultConfig,
        patientData: {
            reference: "1234"
        },
        hospitalData: {
            performer: [
                {
                    actor: {
                        reference: "1235"
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