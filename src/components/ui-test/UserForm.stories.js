import UserForm from './UserForm.vue';
import { useUserStore } from '@/stores/user';

export const Base = {
  render: (args) => ({
    components: { UserForm },
    setup() {
      // const userStore = useUserStore();
      // userStore.userData = {
      //   name: "John Doe",
      //   email: "john@example.com",
      //   id: 53,
      //   avatar: "https://api.dicebear.com/7.x/fun-emoji/svg"
      // }
      return { args }
    },
    template: /* html */`
      <UserForm
        :v-bind="args"
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