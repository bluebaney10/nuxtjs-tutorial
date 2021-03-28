<template>
<div>
    <PostList isAdmin :posts="loadData"/>
    <b-button @click="postAll">Load data</b-button>
</div>
</template>

<script>
import PostList from '@/components/posts/PostList'
import axios from 'axios'
export default {
    layout:"coreLayout",
    components:{
        PostList
    },

    /*
     data() {
     return {
         loadData:[]
     }
   },
    asyncData(context) {
       return axios.get("https://nuxt-tutorial-f0c0f-default-rtdb.firebaseio.com/posts.json")
       .then(res=>{
           const data=[];
           for(const key in res.data){
               data.push({...res.data[key],id:key})
           }
           return{
               loadData:data
           }
       })
   },*/
   /*
    asyncData(context) {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const data=axios.get("https://nuxt-tutorial-f0c0f-default-rtdb.firebaseio.com/posts.json")
                .then(res=>{
                     const postData=[];
                        for(const key in res.data){
                            postData.push({...res.data[key],id:key})
                        }
                         return{
                            loadData:postData
                        }
                  })
                  resolve(data)
            },4000)
        })
    },*/

   methods: {
      /* async postAll(){
            console.log('start load data');
            await axios.get("https://nuxt-tutorial-f0c0f-default-rtdb.firebaseio.com/posts.json")
            .then(res=>{
                console.log(res);
            })
            console.log('load data success');
       }*/


       /*
       async postAll(){
           console.log('click');
           await this.getData().then((result)=>{
               console.log(result);
           })
           console.log('load complete');
       },
       getData(){
           return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const data=axios.get("https://nuxt-tutorial-f0c0f-default-rtdb.firebaseio.com/posts.json")
                .then(res=>{
                    return res
                })
                resolve(data)
            },4000)
           })
       }*/
   },
}
</script>

<style>

</style>