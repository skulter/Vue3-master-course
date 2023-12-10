const TodoForm = {
  props: ["todo"],
  data: function () {
    return {
      form: {
        todo: "",
      },
    };
  },
  template: /*html*/ `
      <form @submit.prevent="$emit('form-submit',form.todo)" id="todoForm">
      <input name ="todo" v-model="form.todo" placeholder="입력해주세요.">
      <button type="submit ">submit</button>
    </form>
    `,
};

// Global Registration
Vue.component("todo-form", TodoForm);
