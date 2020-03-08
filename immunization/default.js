var defaultConfig = [
    {
        name: 'At Birth',
        vaccines: [
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "19",
                          "display": "BCG"
                        }
                      ],
                    text: "BCG 0"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                site : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/v3-ActSite",
                              "code": "LA",
                              "display": "left arm"
                            }
                          ],
                        text: "left arm"
                    },
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "IDINJ",
                            "display": "Injection, intradermal"
                            }
                            ],
                        text: "Injection, intradermal"
                    },
                doseQuantity: {
                        "value": 0.1,
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                      },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 1,
                        seriesDosesPositiveInt : 1
                    }
                ]
            },
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "02",
                          "display": "OPV"
                        }
                      ],
                    text: "OPV 0"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "PO",
                            "display": "Swallow, oral"
                            }
                            ],
                        text: "Swallow, oral"
                    },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 1,
                        seriesDosesPositiveInt : 5
                    }
                ]
            },
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "08",
                          "display": "Hep B, adolescent or pediatric"
                        }
                      ],
                    text: "HEP B 0"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "IM",
                            "display": "Injection, intramuscular"
                            }
                            ],
                        text: "Injection, intramuscular"
                    },
                doseQuantity: {
                        "value": 0.5,
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                      },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 1,
                        seriesDosesPositiveInt : 1
                    }
                ]
            },
            
        ],
    },
    {
        name: "1½ months",
        vaccines: [
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "102",
                          "display": "DTP-Hib-Hep B"
                        }
                      ],
                    text: "LPV 1"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "IM",
                            "display": "Injection, intramuscular"
                            }
                            ],
                        text: "Injection, intramuscular"
                    },
                doseQuantity: {
                        "value": 0.5,
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                      },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 1,
                        seriesDosesPositiveInt : 3
                    }
                ]
            },
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "02",
                          "display": "OPV"
                        }
                      ],
                    text: "OPV 1"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "PO",
                            "display": "Swallow, oral"
                            }
                            ],
                        text: "Swallow, oral"
                    },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 2,
                        seriesDosesPositiveInt : 5
                    }
                ]
            },
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "10",
                          "display": "IPV"
                        }
                      ],
                    text: "IPV 1"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "IM",
                            "display": "Injection, intramuscular"
                            }
                            ],
                        text: "Injection, intramuscular"
                    },
                doseQuantity: {
                        "value": 0.5,
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                      },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 1,
                        seriesDosesPositiveInt : 2
                    }
                ]
            },
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "122",
                          "display": "rotavirus, unspecified formulation"
                        }
                      ],
                    text: "Rotavirus Vaccine 1"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "PO",
                            "display": "Swallow, oral"
                            }
                            ],
                        text: "Swallow, oral"
                    },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 1,
                        seriesDosesPositiveInt : 3
                    }
                ]
            },
        ]
    },
    {
        name: "2½ months",
        vaccines: [
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "102",
                          "display": "DTP-Hib-Hep B"
                        }
                      ],
                    text: "LPV 2"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "IM",
                            "display": "Injection, intramuscular"
                            }
                            ],
                        text: "Injection, intramuscular"
                    },
                doseQuantity: {
                        "value": 0.5,
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                      },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 2,
                        seriesDosesPositiveInt : 3
                    }
                ]
            },
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "02",
                          "display": "OPV"
                        }
                      ],
                    text: "OPV 2"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "PO",
                            "display": "Swallow, oral"
                            }
                            ],
                        text: "Swallow, oral"
                    },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 3,
                        seriesDosesPositiveInt : 5
                    }
                ]
            },
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "122",
                          "display": "rotavirus, unspecified formulation"
                        }
                      ],
                    text: "Rotavirus Vaccine 2"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "PO",
                            "display": "Swallow, oral"
                            }
                            ],
                        text: "Swallow, oral"
                    },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 2,
                        seriesDosesPositiveInt : 3
                    }
                ]
            },
        ],
    },
    {
        name: "3½ months",
        vaccines: [
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "102",
                          "display": "DTP-Hib-Hep B"
                        }
                      ],
                    text: "LPV 3"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "IM",
                            "display": "Injection, intramuscular"
                            }
                            ],
                        text: "Injection, intramuscular"
                    },
                doseQuantity: {
                        "value": 0.5,
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                      },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 3,
                        seriesDosesPositiveInt : 3
                    }
                ]
            },
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "02",
                          "display": "OPV"
                        }
                      ],
                    text: "OPV 3"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "PO",
                            "display": "Swallow, oral"
                            }
                            ],
                        text: "Swallow, oral"
                    },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 4,
                        seriesDosesPositiveInt : 5
                    }
                ]
            },
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "10",
                          "display": "IPV"
                        }
                      ],
                    text: "IPV 2"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "IM",
                            "display": "Injection, intramuscular"
                            }
                            ],
                        text: "Injection, intramuscular"
                    },
                doseQuantity: {
                        "value": 0.5,
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                      },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 2,
                        seriesDosesPositiveInt : 2
                    }
                ]
            },
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "122",
                          "display": "rotavirus, unspecified formulation"
                        }
                      ],
                    text: "Rotavirus Vaccine 3"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "PO",
                            "display": "Swallow, oral"
                            }
                            ],
                        text: "Swallow, oral"
                    },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 3,
                        seriesDosesPositiveInt : 3
                    }
                ]
            },
        ]
    },
    {
        name: "6 months",
        vaccines: [
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "04",
                          "display": "M/R"
                        }
                      ],
                    text: "MR"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "SQ",
                            "display": "Injection, subcutaneous"
                            }
                            ],
                        text: "Injection, subcutaneous"
                    },
                doseQuantity: {
                        "value": 0.5,
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                      },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 1,
                        seriesDosesPositiveInt : 1
                    }
                ]
            },
        ]
    },
    {
        name: "1½ years",
        vaccines: [
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "01",
                          "display": "DTP"
                        }
                      ],
                    text: "DPT Booster"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "IM",
                            "display": "Injection, intramuscular"
                            }
                            ],
                        text: "Injection, intramuscular"
                    },
                doseQuantity: {
                        "value": 0.5,
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                      },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 1,
                        seriesDosesPositiveInt : 1
                    }
                ]
            },
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "02",
                          "display": "OPV"
                        }
                      ],
                    text: "OPV"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "PO",
                            "display": "Swallow, oral"
                            }
                            ],
                        text: "Swallow, oral"
                    },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 5,
                        seriesDosesPositiveInt : 5
                    }
                ]
            },
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "04",
                          "display": "M/R"
                        }
                      ],
                    text: "MR Booster"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "SQ",
                            "display": "Injection, subcutaneous"
                            }
                            ],
                        text: "Injection, subcutaneous"
                    },
                doseQuantity: {
                        "value": 0.5,
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                      },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 1,
                        seriesDosesPositiveInt : 1
                    }
                ]
            },
        ]
    },
    {
        name: "5 years",
        vaccines: [
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "20",
                          "display": "DTaP"
                        }
                      ],
                    text: "DTaP Booster"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "IM",
                            "display": "Injection, intramuscular"
                            }
                            ],
                        text: "Injection, intramuscular"
                    },
                doseQuantity: {
                        "value": 0.5,
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                      },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 1,
                        seriesDosesPositiveInt : 1
                    }
                ]
            },
        ]
    },
    {
        name: "10 years",
        vaccines: [
            {
                vaccineCode : {
                    coding: [
                        {
                          "system": "http://hl7.org/fhir/sid/cvx",
                          "code": "139",
                          "display": "Td(adult) unspecified formulation"
                        }
                      ],
                    text: "TD 1"
                },
                // manufacturer : {
                //     reference: "",
                //     type: ""
                // },
                // lotNumber : "",
                // expirationDate : "",
                route : {
                        coding: [
                            {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
                            "code": "IM",
                            "display": "Injection, intramuscular"
                            }
                            ],
                        text: "Injection, intramuscular"
                    },
                doseQuantity: {
                        "value": 0.5,
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                      },
                fundingSource : {
                        coding: [
                            {
                              "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
                              "code": "public"
                            }
                          ],
                        text: "Public"
                    },
                protocolApplied : [
                    {
                        doseNumberPositiveInt : 1,
                        seriesDosesPositiveInt : 1
                    }
                ]
            },
        ]
    }
]

export default defaultConfig