Vue.component('search', {

    data() {
      return {
          userSearch: '',
          productsAPI: this.$root.$refs.products,
      }
    },

    methods: {
        filter(userSearch){
            // console.log(userSearch);
            this.$root.$refs.products.filter(userSearch)
        }
    },

    template:`
            <form action="#" class="search-form">
                <input type="text" class="search-field" v-model="userSearch">
                <button class="bts-search" type="button" @click="filter(userSearch)">Поиск</button>
            </form>
    `

})