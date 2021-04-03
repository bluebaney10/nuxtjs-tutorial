<template>
<div>
    <AdminForm @sendData="onSubmitted" :post="singlePost"/>
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
    asyncData(context){
        return axios.get("https://nuxt-tutorial-f0c0f-default-rtdb.firebaseio.com/posts/"+context.params.id+".json")
                .then(res=>{
                    return{
                        singlePost:{
                            ...res.data,id:context.params.id
                        }
                    }
                }).catch(e=>context.error(e));
    },
    methods: {
         onSubmitted(postData){
           this.$store.dispatch("editPost",postData).
           then(()=>{
               this.$router.push("/admins")
           })
        }

    },
}
</script>

<style>

</style>