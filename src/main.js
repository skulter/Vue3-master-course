const todos = [
    {
        id: 1,
        text: "vue는 mvvm 패턴에 영향을 받은 프레임워크입니다.",
        done: false

    },
    {
        id: 2,
        text: "vm은 view model의 줄입말입니다.",
        done: false
    },
    {
        id: 3,
        text: "vm 변수는 view model 인스턴스입니다.",
        done: false
    }
]

const entries = todos.map(todo => [todo.id,todo])

const data = {
    todos: new Map(entries),
    form: {
        todo: "",
    }
}

const methods  = {
    checkTodo: function(id) {
        const todo = this.todos.get(id);
        todo.done = !todo.done;
        if(todo) {
            this.todos.set(id,todo);
        }
    },
    removeTodo: function(id) {
        if(this.todos.get(id)?.done) {
            this.todos.delete(id);
            /** https://v2.vuejs.org/v2/api/#v-for */
            this.todos = new Map(this.todos)
        }
    },
    addTodo: function(todo){
        if(todo) {
            const random = Math.random() * 10;
            this.todos.set(random, {
                id: random,
                text: todo,
                done: false
            })
            // Vue 2  
            this.todos = new Map(this.todos);
            this.form.todo = ""
        }
    }
}


const vm = new Vue({
    el: "#app", // <-- same with // vm.$mount('#app')
    components: {
        TodoForm,
        TodoList
    },
    data,
    methods,
    template: /* html */`
         <main>
            <section>
                <todo-form
                    v-on:form-submit="addTodo"
                    :todo="form.todo"
                />
                <todo-list
                    v-on:remove-todo="removeTodo"
                    :todos="todos"
                />
            </section>
        </main>
    `
})
