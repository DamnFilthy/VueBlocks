import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    showSidebar: false
  }),

  getters: {
    isSidebarOpen: (state) => state.showSidebar
  },

  actions: {
    openSidebar() {
      this.showSidebar = true;
    },

    closeSidebar() {
      this.showSidebar = false;
    },

    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    }
  }
});
