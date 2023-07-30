 app.component('app-todo-list',{
  props: {
    todos: {
      type: Array,
      required: true,
    }
  },
  template: /*html*/`
  <h1>Todo List</h1>
  <input v-model="newTodoText" type="text" placeholder="Enter your task...">
  <button @click="$emit('addTodo', newTodoText)">Add</button>
  <ul>
    <li v-for="todo in todos" v-bind:key="todo.id">
      <input type="checkbox" v-model="todo.completed">
      <span>{{ todo.text }}</span>
      <button 
        @click="$emit('deleteTodo', todo.id)" 
        class="deleteBtn"
      >Delete</button>
    </li>
  </ul>
  `,
  data() {
      return {
        newTodoText: ''
      };
    },
})