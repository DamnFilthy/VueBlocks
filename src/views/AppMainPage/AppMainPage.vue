<script setup lang="ts">
import AppIcon from '@/components/icons/AppIcon.vue';
</script>

<template>
  <main class="app-main-page">
    <div class="main-presentation">
      <div class="main-presentation-external-circle square">
        <div class="levitate-big-circle levitate-big-circle--orange levitate-big-circle--01"></div>
        <div class="levitate-big-circle levitate-big-circle--yellow levitate-big-circle--02"></div>
        <div class="levitate-big-circle levitate-big-circle--blue levitate-big-circle--03"></div>
        <div class="levitate-big-circle levitate-big-circle--red levitate-big-circle--04"></div>
        <div class="levitate-big-circle levitate-big-circle--green levitate-big-circle--05"></div>
      </div>

      <div class="main-presentation-interior-circle square">
        <div class="levitate-circle levitate-circle--green levitate-circle--01"></div>
        <div class="levitate-circle levitate-circle--red levitate-circle--02"></div>
        <div class="levitate-circle levitate-circle--orange levitate-circle--03"></div>
        <div class="levitate-circle levitate-circle--blue levitate-circle--04"></div>
        <img class="header-logo__icon" src="@/assets/header-logo.png" />
      </div>
    </div>

    <div class="main-info">
      <div class="main-info__title">
        <span>Ускоряйтесь с </span>
        <span class="theme-text">VueBlocks</span>
      </div>

      <div class="main-info__description">
        VueBlocks это набор интересных решений, удобных для переиспользования и внедерния в ваших
        проектах.
      </div>

      <div class="main-info__btn-block">
        <router-link to="/demos">
          <button class="app-main-button">
            <span>Начать работать</span>
            <app-icon name="arrow-right" />
          </button>
        </router-link>
      </div>
    </div>
  </main>
</template>

<style lang="scss" src="./AppMainPage.scss" />
