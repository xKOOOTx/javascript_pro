const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        counter: 0,
        tabs: ['one', 'two', 'three'],
        currentTab: 'one',
    },
    methods: {
      increase(step) {
          this.counter += step;
      }
    },
    computed: {
        currentComponent() {
            return `component-${this.currentTab}`;
        },
    },
    mounted() {
        console.log(this);
    }
});
