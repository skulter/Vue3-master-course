const TodoList = {
    components: {
        TodoCheckbox,  
    },
    props: ['todos'],
    computed: { 
        todoArray: function() {
            return Array.from(this.todos.values())
        }
    },
    template: /* html */`
        <ul>
            <li 
                v-for="todo in todoArray"
                v-bind:key="todo.id"
            >
                <todo-checkbox
                    v-model="todo.done"
                />
                {{ todo.text }}
                <button v-on:click="$emit('remove-todo',todo.id)">
                    delete
                </button>
            </li>
        </ul>
    `
}