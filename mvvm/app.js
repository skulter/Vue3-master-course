const app = Vue.createApp({
  template: /*html*/`
  <div id="app">
    <app-todo-list ></app-todo-list>
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
      count: 10
    }
  },
  methods: {
    plusCount() {
      this.count++;
    },
    minusCount(){
      this.count--;
    }
  }
})