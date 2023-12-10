const TodoList = {
  props: ["todos"],
  component: { TodoCheckbox },
  computed: {
    todoArray: function () {
      console.log(this.todos.values());
      return Array.from(this.todos.values());
    },
  },
  template: /* html */ `
        <ul>
          <li v-for="todo in todoArray" :key="todo.id">
          <todo-checkbox
            v-model='todo.done'
          />
          {{todo.text}}
            <button @click="$emit('remove-todo',todo.id)">delete</button>
          </li>
        </ul>
    `,
};
Vue.component("todo-list", TodoList);
