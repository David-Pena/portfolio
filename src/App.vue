<script setup lang="ts">
import { onMounted } from 'vue'
import PreLoader from './components/layouts/PreLoader.vue'
import { kuraTmMyLoad, customCursor, audioSoundAndOpen, wowJsAnimation, aTagClick } from './utils'

onMounted(() => {
  kuraTmMyLoad
  customCursor
  audioSoundAndOpen
  wowJsAnimation
  aTagClick
})
</script>

<template>
  <fragment>
    <PreLoader />
    <router-view />
  </fragment>
</template>
