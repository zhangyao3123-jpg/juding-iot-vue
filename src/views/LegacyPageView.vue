<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const legacyUrl = computed(() => `/legacy-pages/${route.meta.legacyFile}`)
</script>

<template>
  <iframe class="legacy-frame" :src="legacyUrl" :title="route.meta.title"></iframe>
</template>

<style scoped>
.legacy-frame {
  width: 100vw;
  height: 100vh;
  display: block;
  border: 0;
  background: #eef1f8;
}
</style>
