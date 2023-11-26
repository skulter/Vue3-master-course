import UserForm from './UserForm.vue';

export const Base = {
  render: (args) => ({
    components: { UserForm },
    setup() {
      return { args }
    },
    template: /* html */`
      <UserForm
        v-bind="args"
      />
    `,
  }),
  args: {
    alt: "storybook User Form"
  }
}

export default {
  component: UserForm
}