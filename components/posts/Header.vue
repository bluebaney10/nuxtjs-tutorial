<template>
   <div>
       <b-carousel id="slider"
       controls
       indicators>
       <div v-for="item in items">
        <b-carousel-slide
        :caption=item.caption
        :text=item.text
        :img-src=item.image
      ></b-carousel-slide>
      </div>
    </b-carousel>
    </div>
</template>
<script>
export default {
    data(){
        return{
            items:[
             {caption:"A",image:require("@/assets/images/ink-1.jpg"),text:"Nulla vitae elit libero, a pharetra augue mollis interdum."},
             {caption:"B",image:require("@/assets/images/ink-2.jpg"),text:"Nulla vitae elit libero, a pharetra augue mollis interdum."},
             {caption:"C",image:require("@/assets/images/ink-3.jpg"),text:"Nulla vitae elit libero, a pharetra augue mollis interdum."}
            ]
        }
    }
}
</script>

<style scoped>
h2{
    color:red;
}
</style>