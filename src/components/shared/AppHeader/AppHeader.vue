<template>
  <div class="app-header">
    <router-link to="/" class="header-logo">
      <img class="header-logo__icon" src="@/assets/header-logo.png" />
      <div class="header-logo__text">VueBlocks</div>
    </router-link>

    <div class="header-nav">
      <ul class="header-nav__list">
        <li class="header-nav__item">
          <router-link to="/demos">Demos</router-link>
        </li>
        <li class="header-nav__item">
          <a href="https://github.com/DamnFilthy/VueBlocks">Github</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" src="./AppHeader.scss" />
