<template>
<div>
    <PostList isAdmin :posts="loadData"/>
</div>
</template>

<script>
import PostList from '@/components/posts/PostList'

export default {
    layout:"coreLayout",
    components:{
        PostList
    },
    computed:{
        loadData(){
            return this.$store.getters.getAllPosts
        }
    }
}
</script>

<style>

</style>