new Vue({
  el: '#vue-app',

  data: {
    showSideNav: true,
    showSearchNav: false,
  },

  methods: {
    toggleSideNav() {
      this.showSideNav = !this.showSideNav;
    },

    toggleSearchNav() {
      this.showSearchNav = !this.showSearchNav;
    },
  },

  mounted() {
    console.log('mounted');
  },
});
