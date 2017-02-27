new Vue({
  el: '#vue-app',

  data: {
    showSideNav: true,
    showSearchNav: false,
    showUserDropdownMenu: false,
  },

  methods: {
    toggleSideNav() {
      this.showSideNav = !this.showSideNav;
    },

    toggleSearchNav() {
      this.showSearchNav = !this.showSearchNav;
    },

    toggleUserDropdownMenu() {
      this.showUserDropdownMenu = !this.showUserDropdownMenu;
    },
  },

  mounted() {
    console.log('mounted');
  },
});
