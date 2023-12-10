const todos = [
  {
    id: 1,
    text: "vue is single page application",
    done: true,
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
  components: {
    TodoForm,
    TodoList,
  },
  data,
  methods: {
    addTodo: function (todo) {
      if (todo) {
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
      if (this.todos.get(id)?.done) {
        this.todos.delete(id);
        this.todos = new Map(this.todos);
      }
    },
    toggleCheckbox: function () {
      console.log("toggle");
    },
  },
  template: /* html */ `
  <section>
    <todo-form
          @form-submit="addTodo"
          :todo="form.todo"
    />
    <todo-list
        @remove-todo="removeTodo"
        :todos ="todos"
    />
    </section>
  `,
});
