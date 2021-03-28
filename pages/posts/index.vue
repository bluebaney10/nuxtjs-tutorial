<template>
    <b-container fluid>
          <Header/>
          <PostList :posts="loadData"/>

   </b-container>
</template>

<script>
import Header from '@/components/posts/Header'
import PostList from '@/components/posts/PostList'


export default {
 layout:"coreLayout",
 components:{
     Header,
     PostList
 },
   computed:{
        loadData(){
            return this.$store.getters.getAllPosts
        }
    }
 /*
 data() {
     return {
         loadData:[{
                id:"1",
                title:"blue 1",
                content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                image:"https://i.dailymail.co.uk/1s/2021/03/04/22/40057840-9324995-image-a-69_1614897315632.jpg"
         },{
                id:"2",
                title:"blue 2",
                content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                image:"https://i.dailymail.co.uk/1s/2021/02/26/20/39815064-0-image-a-2_1614371512400.jpg"
         },{
                id:"3",
                title:"blue 3",
                content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                image:"https://i.dailymail.co.uk/1s/2021/03/04/22/40057840-9324995-image-a-69_1614897315632.jpg"
         },{
                id:"4",
                title:"blue 4",
                content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                image:"https://i.dailymail.co.uk/1s/2021/02/26/20/39815064-0-image-a-2_1614371512400.jpg"
         }]
     }
 },
 */
}
</script>

<style>

</style>