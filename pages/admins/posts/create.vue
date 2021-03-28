<template>
<div>
    <AdminForm @sendData="onSubmitted"/>
</div>
</template>

<script>
import AdminForm from '@/components/admins/AdminForm'
import axios from 'axios'

export default {
    layout:"coreLayout",
    components:{
        AdminForm
    },
    methods: {
         onSubmitted(postData){
           this.$store.dispatch("addPost",postData).
           then(()=>{
               this.$route.push("/admins/posts")
           })
        }
        /*
        onSubmitted(postData){
            axios.post("https://nuxt-tutorial-f0c0f-default-rtdb.firebaseio.com/posts.json",postData)
            .then(res=>{
                console.log(res);
            })
        }*/
    },
}
</script>

<style>

</style>