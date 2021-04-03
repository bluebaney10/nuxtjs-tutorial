<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <nuxt-link class="nav-item nav-link" to="/">Home</nuxt-link>
                <nuxt-link class="nav-item nav-link" to="/posts">Article</nuxt-link>
                 <nuxt-link class="nav-item nav-link" to="/admins">Writer</nuxt-link>
            </b-navbar-nav>
        </b-navbar>
        <nuxt/>
    </div>
</template>