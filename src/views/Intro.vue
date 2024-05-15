<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="kura_tm_all_wrap" data-magic-cursor="show" data-color="orange">
    <div class="kura_tm_intro">
      <div class="kura_tm_intro_fixed_price">
        <span class="anim"></span>
        <span class="anim"></span>
        <span class="anim"></span>
        <a
          href="https://themeforest.net/item/kura-personal-portfolio-template/33709277"
          target="_blank"
          class="pricing-info anim"
          >-70%</a
        >
      </div>

      <div class="short_info">
        <img src="img/logo/dark.png" alt="" />
        <h3>Personal Portfolio Template</h3>
      </div>
      <span class="intro_line"></span>
      <span class="intro_line_2"></span>
      <span class="intro_line_3"></span>
      <div class="demos">
        <div class="left">
          <div class="desc">
            <img src="img/intro/1.png" alt="" />
            <h3 class="title">Light Demo</h3>
          </div>

          <router-link class="intro_link" to="/" target="_blank"></router-link>
        </div>
        <div class="right">
          <div class="desc">
            <img src="img/intro/2.png" alt="" />
            <h3 class="title">Dark Demo</h3>
          </div>
          <router-link class="intro_link" to="/index-dark" target="_blank"></router-link>
        </div>
      </div>
    </div>
    <Audio />
    <Mouse />
  </div>
</template>

<script setup>
import Audio from '../components/layouts/Audio.vue'
import Mouse from '../components/layouts/Mouse.vue'
</script>
