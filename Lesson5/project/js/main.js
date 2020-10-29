const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150',
        filteredProducts: [],
        searchLine: '',
        classObject: {
            isVisible: true
        }
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            console.log(product.id_product)
        },
        filteredProduct() {
            this.filteredProducts = this.products.filter(el => {
                return el.product_name.toLowerCase().indexOf(this.searchLine) !== -1
            })
        },
        // toggleCart() {
        //     const cartBtn = document.querySelector('.btn-cart');
        //     const cartBlock = document.querySelector('.cart-block');
        //
        //     cartBtn.addEventListener('click', () => {
        //         cartBlock.classList.toggle('invisible')
        //         }
        //     )
        // },

    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
        this.getJson(`${API}${this.catalogUrl}`)
            .then(data => {
                for (el of data) {
                    this.products.push(el);
                }
                this.filteredProducts = this.products;
            });

    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    },
});
