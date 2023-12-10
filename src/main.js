const vue = Vue;

const todos = [
  {
    id: 1,
    text: "vue is single page application",
    done: false,
  },
  {
    id: 2,
    text: "vue floows mvvm pattren",
    done: false,
  },
  {
    id: 3,
    text: "start vue with cdn",
    done: false,
  },
];

const todoEntries = todos.map((todo) => [todo.id, todo]);
const data = {
  todos: new Map(todoEntries),
  form: {
    todo: "",
  },
};

const vm = new Vue({
  el: "#app",
  data,
  methods: {
    addTodo: function (e) {
      e.preventDefault();
      const todo = this.form.todo;
      if (todo) {
        const todoSize = Array.from(this.todos.entries()).length;
        const random = Math.random() * 10;
        this.todos.set(random, {
          id: random,
          text: todo,
          done: false,
        });
        // Vue 2
        this.todos = new Map(this.todos);
        this.form.todo = "";
      }
    },
    removeTodo: function (id) {
      this.todos.delete(id);
      this.todos = new Map(this.todos);
    },
  },
  template: /* html */ `
  <section>
    <form @submit="addTodo">
      <input name ="todo" v-model="form.todo" placeholder="입력해주세요.">
    </form>
      <div>
        <ul v-for="todo in Array.from(todos.values())">
          <li key="todo.id">{{todo.text}}</li>
          <button @click="removeTodo(todo.id)">delete</button>
        </ul>
      </div>
    </section>
  `,
});
