//API без ошибки.
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

//API с ошибкой
//const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/response';

const app = new Vue({
    el: '#app',
    data: {
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    this.$refs.error.takeErrorAPI(error);
                })
        },
    },
    mounted() {
        console.log(this);
    },
});