<script>
import {
    RouterLink,
    RouterView
} from 'vue-router'
export default {
    name: 'App',
    methods: {
        getName() {
            return 'ganesh';
        }
    }
}
</script>

<template>
<header>
    <div>
        <nav>
            <RouterLink to="/"> Distributors </RouterLink>
            <RouterLink to="/products">Products</RouterLink>
        </nav>
    </div>
</header>

<RouterView />
</template>

<style scoped>
nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 32px;
}
a{
  margin-inline: 1rem;
}
</style>
