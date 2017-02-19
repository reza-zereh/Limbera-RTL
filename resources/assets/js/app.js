new Vue({
  el: '#vue-app',

  data: {
    showSideNav: true
  },

  methods: {
    toggleSideNav() {
      this.showSideNav = !this.showSideNav;
    }
  },

  mounted() {
    console.log('mounted');
  }
});
