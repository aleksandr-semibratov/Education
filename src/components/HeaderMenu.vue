<template>
  <div class="hello">
    <h3>Menu</h3>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/news">News</router-link></li>
      <li><router-link to="/another-page">Another page</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu"
}
</script>
