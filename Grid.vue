<template>
  <div id="app" style="width: 100%;">
        <!--<pre>{{ $data | json }}</pre>-->
        <div>
            <div class="layoutJSON">
                Displayed as <code>[x, y, w, h]</code>:
                <div class="columns">
                    <div class="layoutItem" v-for="(item, index) in layout" :key="index">
                        <b>{{item.i}}</b>: [{{item.x}}, {{item.y}}, {{item.w}}, {{item.h}}]
                    </div>
                </div>
            </div>
        </div>
        <div id="content">
            <!--<button @click="decreaseWidth">Decrease Width</button>
            <button @click="increaseWidth">Increase Width</button>
            <button @click="addItem">Add an item</button>-->
            <input type="checkbox" v-model="draggable"/> Draggable
            <input type="checkbox" v-model="resizable"/> Resizable
            <br/>
            <grid-layout :layout="layout"
                         :col-num="12"
                         :row-height="30"
                         :is-draggable="draggable"
                         :is-resizable="resizable"
                         :vertical-compact="false"
                         :use-css-transforms="true"
                         :responsive="true"
                         
            >
                <grid-item v-for="(item, index) in layout"
                           :key="index"
                           :static="item.static"
                           :x="item.x"
                           :y="item.y"
                           :w="item.w"
                           :h="item.h"
                           :i="item.i"
                        >
                    <immunization-component :config="config" :patientdata="patientData" :hospitaldata="hospitalData" @done="console"/>
                </grid-item>
            </grid-layout>
        </div>
  </div>
</template>

<script>
import {GridItem, GridLayout} from 'vue-grid-layout'
import ImmunizationComponent from './immunization/Immunization.vue'
import defaultConfig from './immunization/default'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

var testLayout = [
    {"x":0,"y":0,"w":4,"h":11,"i":"0", static: false, "minH":11},
    {"x":4,"y":0,"w":4,"h":11,"i":"1", static: false, "minH":11},
];
export default {
    components: {
        GridItem: GridItem, 
        GridLayout: GridLayout,
        ImmunizationComponent: ImmunizationComponent
    },
    data() {return {
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
        },
        layout: testLayout,
        draggable: true,
        resizable: true,
        index: 0
    }},
    methods: {
        itemTitle(item) {
            var result = item.i;
            if (item.static) {
                result += " - Static";
            }
            return result;
        }
    }
}
</script>

<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css";
</style>