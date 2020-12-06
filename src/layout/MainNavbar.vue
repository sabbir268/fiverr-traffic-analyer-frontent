<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link class="navbar-brand" to="/">
        Traffic Analayzer Blog
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link class="nav-link btn btn-natural" to="/">
          <p>Home</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link btn btn-natural" to="/blog">
          <p>Blog</p>
        </router-link>
      </li>
    </template>
  </navbar>
</template>

<script>
import { Navbar } from "@/components";
import { Popover } from "element-ui";
export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    Navbar,
    [Popover.name]: Popover,
  },
};
</script>

<style scoped></style>
