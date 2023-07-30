const app = Vue.createApp({
  template: /*html*/`
  <div id="app">
    <app-todo-list
      :todos="todos"
      @addTodo="addTodo"
      @deleteTodo="deleteTodo"
    ></app-todo-list>
  </div>
  <div id="counter">
    <app-counter 
      v-model="count"
      @plusCount="plusCount()"
      @minusCount="minusCount()"
    ></app-counter>
  </div>
  `,
  data() {
    return {
      count: 10,
      todos: [{
        id: 1,
        text: "exmaple text",
        completed: true,
      }]
    }
  },
  methods: {
    plusCount() {
      this.count++;
    },
    minusCount(){
      this.count--;
    },
    addTodo(newTodoText){
      const todoText = newTodoText.trim();

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
    }
  }
})