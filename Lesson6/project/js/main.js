const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-stoe-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    userSearch: '',
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          this.$refs.error.setError(error)
        })
    },
  },
});

