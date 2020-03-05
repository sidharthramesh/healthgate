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
            tabData: {}
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
        months () {
            return this.config.map(a => a.name)
        },

    },
    methods: {
        openMonth (month) {
            this.currentMonth = month;
        }
    },
    template: `#temp`
});

new Vue({
    el: '#body',
    data: {
        config: [
            {
                name: 'At Birth',
                vaccines: [
                    {
                        vaccineCode : {
                            coding: "",
                            text: ""
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
                    }
                ]
            }
        ]
    }
})