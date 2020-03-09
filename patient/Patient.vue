<template>

  <section class="container">
    <div class="container">
        <div class="level">
            <div class="level-left">
                <h1 class="title">Patient Details</h1>
            </div>
            <div class="level-right">
                <!-- If in show mode -->
                <button class="button" :class="{'is-hidden':edit, 'is-loading':sending}" @click="edit=true">
                    <span class="icon">
                        <i class="fas fa-pencil-alt"></i>
                    </span>
                    <span class="is-uppercase is-size-6 is-uppercase has-text-weight-semibold">
                        Edit
                    </span>
                </button>
                <!-- If in edit mode -->
                <div class="buttons" :class="{'is-hidden':!edit}">
                    <button class="button is-danger is-inverted" @click="edit=false">
                        <span class="icon">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                        <span class="is-uppercase is-size-6 is-uppercase has-text-weight-semibold">
                            Cancel
                        </span>
                    </button>
                    <button class="button is-primary" @click="done">
                    <span class="icon">
                        <i class="fa fa-check"></i>
                    </span>
                    <span class="is-uppercase is-size-6 is-uppercase has-text-weight-semibold">
                    Done
                </span>
                </button>
                </div>
                
            </div>
        </div>
        <hr>
        
        <div class="container">
            <div class="form" :class="{'is-hidden':!edit}">
                <div class="field">
                    <label class="label">OPD number</label>
                    <div class="control">
                        <input class="input" type="text" v-model="data.opdNumber" placeholder="OPD number">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" v-model="data.name" placeholder="Full name">
                    </div>
                </div>
                    <div class="field">
                    <label class="label">Gender</label>
                    <div class="control">
                        <div class="select">
                        <select v-model="data.gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Mobile number</label>
                    <div class="control">
                        <input class="input" type="text" v-model="data.phone" placeholder="10 digit mobile number">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Date of birth</label>
                    <div class="control">
                        <input class="input" type="date" v-model="data.dob" placeholder="">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Parent's details</label>
                    <div class="control">
                        <input class="input" type="text" v-model="data.motherName" placeholder="Mother's name">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="data.fatherName" placeholder="Father's name">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Address</label>
                    <div class="control">
                        <input class="input" type="text" v-model="data.addressLine" placeholder="House number, Street">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="data.city" placeholder="City">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="data.pincode" placeholder="Pincode">
                    </div>
                </div>
            </div>

            <div class="content" :class="{'is-hidden':edit}">
                <!-- Details -->
                <h1 v-if="oldFHIR.name[0].text">{{oldFHIR.name[0].text}} </h1>
                <p v-if="oldFHIR.gender">
                    <span class="icon has-text-link" v-if="oldFHIR.gender=='male'"><i class="fas fa-mars"></i></span>
                    <span class="icon has-text-danger" v-if="oldFHIR.gender=='female'"><i class="fas fa-venus"></i></span>
                    <span class="is-capitalized">{{oldFHIR.gender}}</span>
                </p>
                <p v-if="this.oldFHIR.identifier[1].value"><strong>OPD number: </strong>{{this.oldFHIR.identifier[1].value}}</p>
                <p v-if="oldFHIR.telecom[0].value"><strong>Phone number: </strong>{{oldFHIR.telecom[0].value}}</p>
                <p v-if="oldFHIR.birthDate"><strong>Date of birth: </strong>{{oldFHIR.birthDate}}</p>
                <p v-if="oldFHIR.address[0].text"><strong>Address: </strong>{{oldFHIR.address[0].text}}</p>
                <p v-if="oldFHIR.mother"><strong>Mother's name </strong>{{oldFHIR.mother}}</p>
                <p v-if="oldFHIR.father"><strong>Father's name </strong>{{oldFHIR.father}}</p>
        </div>
        </div>
    </div>
</section>
</template>

<script>
import MedBlocks from 'medblocks'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
export default {
    props: [
        'patientdata',
        'hospitaldata'
    ],
    data() {
        return {
            edit: false,
            oldFHIR: {},
            data: {},
            sending: false
        }
    },
    computed: {
        name(){
            if (this.data.name) {
                var name = [
                    {
                        "use" : "usual", // usual | official | temp | nickname | anonymous | old | maiden
                        "text" : this.data.name || undefined, // Text representation of the full name
                    }
                    ]
                return name
            }
            else {
                return undefined}},
        address() {
            if (this.data.addressLine || this.data.pincode || this.data.city){
                return [{
                    // from Element: extension
                    "use" : "home", // home | work | temp | old | billing - purpose of this address
                    "type" : "both", // postal | physical | both
                    "text" : [this.data.addressLine , this.data.city, this.data.pincode].filter(a=>a).join(", "), // Text representation of the address
                    "line" : [this.data.addressLine || undefined], // Street name, number, direction & P.O. Box etc.
                    "city" : this.data.city || undefined, // Name of city, town etc.
                    "postalCode" : this.data.pincode || undefined, // Postal code for area
                    "country" : "IN", // Country (e.g. can be ISO 3166 2 or 3 letter code)
                            }]
            }
            else {
                return undefined
                }
            },
        FHIRcomponents() {
            var FHIRcomponents = [
            {
                "resourceType" : "Patient",
                "identifier" : [{
                    "system": "https://medblocks.org",
                    "value": "tornadoalert@gmail.com"
                    },
                    {
                "type": {
                "coding": [
                    {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "MR",
                    "display": "Medical Record Number"
                    }
                ],
                "text": "Medical Record Number"
                },
                "system": "http://hospital.smarthealthit.org",
                "value": this.data.opdNumber
                }],
                "name": this.name,
                "telecom" : [
                    {
                        "system" : "phone", // C? phone | fax | email | pager | url | sms | other
                            "value" : this.data.phone || undefined,
                        }
                ], // A contact detail for the individual
                "gender" : this.data.gender || undefined, // male | female | other | unknown
                "birthDate" : this.data.dob || undefined, // The date of birth for the individual
                // deceased[x]: Indicates if the individual is deceased or not. One of these 2:   
                "address" : this.address,
                "period": {
                    "start": new Date().toISOString()
                }
            }]
            return FHIRcomponents
        },
        newFHIR() {
            var newFHIR = Object.assign(this.oldFHIR, ...this.FHIRcomponents)
            return JSON.stringify(newFHIR)
        }
    },
    methods: {
        async done(){
            this.sending = true
            var hash = await this.api.add(this.newFHIR, "Patient")
            await this.api.permit(hash, this.patientdata.reference)
            console.log(hash)
            await this.load()
            this.sending = false
            this.edit = false
            await this.load()
        },
        async load(){
            var patientResources = await this.api.list(this.patientdata.reference,"Patient")
            console.log(patientResources)
            patientResources = await Promise.all(patientResources.map(hash=>this.api.get(hash)))
            patientResources = patientResources.map(fhir=>JSON.parse(fhir))
            patientResources.sort((fhirData1, fhirData2)=> new Date(fhirData2.period.start) - new Date(fhirData1.period.start))
            this.oldFHIR = patientResources[0]
            
            this.data.name = this.oldFHIR.name[0].text
            this.data.gender= this.oldFHIR.gender
            this.data.dob = this.oldFHIR.birthDate
            this.data.opdNumber = this.oldFHIR.identifier[1].value
            if (this.oldFHIR.telecom){
                this.data.phone = this.oldFHIR.telecom[0].value
            }
            if (this.oldFHIR.address){
                this.data.addressLine= this.oldFHIR.address[0].line[0]
                this.data.city= this.oldFHIR.address[0].city
                this.data.pincode= this.oldFHIR.address[0].postalCode
            }
            
            // if (patientResources.length > 0){
            //     this.oldFHIR = JSON.parse(await this.api.get(patientResources[0]))
            // }
        }
    },
    async mounted(){
        this.api = await new MedBlocks()
        await this.api.login(this.hospitaldata.performer[0].actor.reference)
        await this.load()
    }
}
</script>

<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css";
    .vue-grid-item.vue-grid-placeholder {
        background: orange;
    }
</style>
    
