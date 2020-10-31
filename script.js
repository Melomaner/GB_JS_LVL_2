const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl:'/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150',
        searchInput: '',
        open: false,

    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        addProduct(product){
            console.log(product.id_product);
        },
        itemSearch(item) {
            console.log(item);
        },
        openCart() {
            this.open = !this.open
        },
    },
    computed: {

    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            });
    },

});