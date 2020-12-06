<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
  </div>
</template>
<script>
export default {
  name: "App",
  metaInfo: {
    title: "Trafficanalyzer Blog",
    // all titles will be injected into this template
    titleTemplate: "%s | Trafficanalyzer Blog",
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: "Trafficanalyzer Blog" },
  ],
};
</script>
