<template>
<div>
    <SinglePost :post="singlePost"/>
</div>
</template>

<script>
import SinglePost from '@/components/posts/SinglePost'
import axios from 'axios'

export default {
    layout:"coreLayout",
    components:{
        SinglePost
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

}
</script>

<style>

</style>