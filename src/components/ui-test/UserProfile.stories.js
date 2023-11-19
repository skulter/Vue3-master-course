import UserProfile from './UserProfile.vue';
import { useUserStore } from '@/stores/user';

export const Base = {
  render: (args) => ({
    components: { UserProfile },
    setup() {
      const userStore = useUserStore();
      userStore.userData = {
        name: "John Doe",
        email: "john@example.com",
        id: 53,
        avatar: "https://api.dicebear.com/7.x/fun-emoji/svg"
      }
      return { args }
    },
    template: /* html */`
      <UserProfile 
        v-bind="args"
      />
    `,
  }),
  args: {
    alt: "storybook Profile"
  }
}

export default {
  component: UserProfile
}