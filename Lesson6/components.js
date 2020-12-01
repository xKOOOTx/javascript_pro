Vue.component('component-one', {
    template: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias animi delectus ducimus ex in laudantium, nam qui sunt temporibus veritatis vitae. Aliquam eaque et ipsam nemo odit similique voluptate!</div>`
});
Vue.component('component-two', {
    template: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci architecto at aut blanditiis culpa cum dignissimos doloribus eaque, esse hic incidunt laboriosam mollitia nihil, placeat quae qui quidem ut!</div></div>`
});
Vue.component('component-three', {
    template: `<div>Lorem ipsum dolor sit amet, ptate!</div>`
});

const childElement = {
  name: 'child-element',
  template: '<p>some in child component</p>',
};

Vue.component('some-el', {
    props: ['title', 'counter', 'increase'],
    components: { childElement },
    data() {
        return {
            innerTitle: 'Hello!',
            innerCounter: 0,
        };
    },
    template: `<div>
                    <div>{{title}}</div>
                    <div>{{counter}}</div>
                    <child-element></child-element>
<!--                    <div>{{innerCounter}}</div>-->
<!--                    <button @click="innerCounter++">Increase</button>-->
<!--                    <button @click="increase()">Increase</button>-->
                    <button @click="$emit('increase-counter', 2)">Increase</button>
                    <slot>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam at blanditiis cum, error expedita facere id illo modi molestias obcaecati possimus provident quia ratione, recusandae sequi velit. Libero, molestiae.</p>
                    </slot>
               </div>`,
    mounted() {
        console.log(this);
        this.innerCounter = this.counter;
    }
});
