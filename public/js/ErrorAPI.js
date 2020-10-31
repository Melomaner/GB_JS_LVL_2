Vue.component('error', {

    data() {
        return {
            error: '',
            showError: false,
        }
    },

    methods: {
        takeErrorAPI(error){
            this.error = error
            if (!this.showError){
                this.showError = !this.showError
            }

        }
    },

    template:`
            <div class="error" v-show="showError">
                Ошибка! : {{error}}
            </div>
    `

})