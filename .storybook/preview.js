import { createPinia } from "pinia";
import { setup } from "@storybook/vue3";
import "../src/index.css"

const pinia = createPinia();

setup((app) => {
  app.use(pinia);
});


/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};



export default preview;
