 app.component('app-todo-list',{
  template: /*html*/`
  <h1>Todo List</h1>
  <input v-model="newTodoText" type="text" placeholder="Enter your task...">
  <button @click="addTodo">Add</button>
  <ul>
    <li v-for="todo in todos" v-bind:key="todo.id">
      <input type="checkbox" v-model="todo.completed">
      <span>{{ todo.text }}</span>
      <button @click="deleteTodo(todo.id)" class="deleteBtn">Delete</button>
    </li>
  </ul>
  `,
  data() {
      return {
        todos: [],
        newTodoText: ''
      };
    },
    methods: {
      addTodo() {
        const todoText = this.newTodoText.trim();
        if (todoText !== '') {
          this.todos.push({
            id: this.todos.length + 1,
            text: todoText,
            completed: false,
          });
          this.newTodoText = '';
        }
      },
      deleteTodo(todoId) {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
      },
    },
})