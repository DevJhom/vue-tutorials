const app = Vue.createApp({
    data() {
        return {
            vueLink: "https://vuejs.org/guide/introduction.html",
            randomNumber: 0,
            name: "Listening to input event"
        };
    },
    methods: {
        randomize(digit) {
            this.randomNumber = Math.round(Math.random() * digit);
            return randomNumber;
        },
        setName(e){
            this.name = e.target.value;
        }
    }
});

app.mount('#user-goal');