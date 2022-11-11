const app = Vue.createApp({
    data() {
        return {
            vueLink: "https://vuejs.org/guide/introduction.html",
            randomNumber: 0,
            todo: "",
            todoLists: [],
        };
    },
    methods: {
        randomize(digit) {
            this.randomNumber = Math.round(Math.random() * digit);
            return randomNumber;
        },
        addTodo(){
            this.todoLists.push(this.todo);
            this.todo = "";
        },
        removeTodo(idx) {
            this.todoLists.splice(idx, 1);
        }
    }
});

app.mount('#user-goal');