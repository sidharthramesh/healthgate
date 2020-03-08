<template>
  <div class="hello">
    <grid-layout
            :layout="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >

      <grid-item v-for="item in layout"
                :key="item.i"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.h"
                 :i="item.i">
        <div v-html="item.c">
        </div>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';

  let a = `This needs to be another component, like Test`;
  let b = `This needs to be another component, like Test2`;

  var testLayout = [
    {"x":0,"y":0,"w":2,"h":2,"i":"0", "c": a},
    {"x":2,"y":0,"w":2,"h":4,"i":"1", "c": b}
  ];
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  data: function (){
    return {
      layout: testLayout
    }
  }
}
</script>