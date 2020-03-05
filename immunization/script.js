// V0.1

let IMMUNIZATION_FHIR = `{

    resourceType : "Immunization",
    status : "completed",
    vaccineCode : {
        coding: "",
        text: ""
    },
    patient : {
        reference: "",
        type: ""
    },
    encounter : {
        reference: "",
        type: ""
    },
    occurrenceDateTime : "",
    recorded : "",
    primarySource : true,
    location : {
        reference: "",
        type: ""
    },
    manufacturer : {
        reference: "",
        type: ""
    },
    lotNumber : "",
    expirationDate : "",
    site : {
        coding: "",
        text: ""
    },
    route : {
        coding: "",
        text: ""
    },
    doseQuantity : {
        value: 0,
        unit: "",
        system: "",
        code: ""
    },
    performer : [
        {
            actor : {
                reference: "",
                type: "Practitioner"
            }
        }
    ],
    note : [
        {
            text: "HealthGate Immunization Component v0.1"
        }
    ],
    education : [{
        documentType : "HealthGate Passport",
        publicationDate : "05-03-20202020-03-05T07:22:31.345Z",
        presentationDate : ""
    }],
    programEligibility : [
        {
            coding: "",
            text: ""
        }
    ],
    fundingSource : {
        coding: "",
        text: ""
    },
    protocolApplied : [
        {
            series : "",
            authority : {
                reference: "",
                type: ""
            },
            targetDisease : [
                {
                    coding: "",
                    text: ""
                }
            ],
            doseNumberPositiveInt : "",
            seriesDosesPositiveInt : ""
        }
    ]

}`;

Vue.component('immunization-component', {
    props: ['config', 'patientData', 'hospitalData'],
    data () {
        return {
            currentMonth: '',
            tabData: [],
            setData: [],
            sending: false
        };
    },
    computed: {
        _patientData () {
            let ptnData = {};
            ptnData.id = this.patientData.id || "";
            ptnData.birthdate = this.patientData.birthdate || "";
            return ptnData;
        },
        _hospitalData () {
            let hospData = {};
            hospData.id = this.hospitalData.id || "";
            hospData.actor = this.hospitalData.actorId || "";
            return hospData;
        },
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
        }
    },
    methods: {
        openMonth (month) {
            this.currentMonth = month;
            let monthObj = this._config.find(a => a.name === month);
            this.tabData = monthObj.vaccines.map(a => {
                a.givenOn = a.givenOn || undefined;
                return a;
            });
        },

        setVaccineDate (vaccine) {
            vaccine.givenOn = new Date().toISOString();
            this.setData.push(vaccine);
        },

        validate () {
            if (this.setData.length === 0 &&
                this._patientData.id &&
                this._hospitalData.actor &&
                this._hospitalData.id ) {
                return true;
            }
        },

        done () {
            // Complie and emit
            if (this.validate()) {
                / Compile
            }
        }
    },
    template: `#temp`
});

let DATA = new Vue({
    el: '#body',
    data: {
        config: [
            {
                name: 'At Birth',
                vaccines: [
                    {
                        vaccineCode : {
                            coding: "102",
                            text: "DTP-Hib-Hep B"
                        }
                    },
                    {
                        vaccineCode : {
                            coding: "104",
                            text: "DTP-Hib"
                        }
                    }
                ]
            },
            {
                name: '1. Months',
                vaccines: [
                    {
                        vaccineCode : {
                            coding: "102",
                            text: "DTP-Hib-Hep B"
                        }
                    },
                    {
                        vaccineCode : {
                            coding: "104",
                            text: "DTP-Hib"
                        }
                    }
                ]
            }
        ]
    }
})