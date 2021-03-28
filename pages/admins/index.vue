<template>
<div class="my-2">
   <nuxt-link to="/admins/posts" class="btn btn-primary">View Article</nuxt-link>
   <nuxt-link to="/admins/posts/create" class="btn btn-success">Write Article</nuxt-link>
</div>
</template>
<script>
export default {
    layout:"coreLayout"
}
</script>