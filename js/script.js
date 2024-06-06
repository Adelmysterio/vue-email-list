const { createApp } = Vue

createApp({
    data() {
        return {
            emails: [],
        }
    },

    methods: {
        getEmails: function () {
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        const result = response.data.response
                        this.emails.push(result)
                    })
            }
        }
    },

    created() {
        this.getEmails()
    }

}).mount('#app')