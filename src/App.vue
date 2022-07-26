<template>
  <header-menu></header-menu>
  <router-view></router-view>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu";

export default {
  name: 'App',
  components: {
    HeaderMenu,
  }
}
</script>
