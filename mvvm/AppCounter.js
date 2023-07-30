app.component('app-counter',{
  template: /*html*/`
  <h1>Counter</h1>
  <div>{{count}}</div>
  <div>{{countText}}</div>
  <button @click="plusCount">+</button>
  <button v-on:click="minusCount">-</button>
  `,
  data(){
    return {
      count: 0
    }
  },
  methods: {
    plusCount() {
      this.count++;
    },
    minusCount() {
      this.count--;
    },
  },
  computed: {
    countText() {
      return this.count <=5 ? '카운터가 5보다 작거나 같습니다.': "카운터가 5보다 큽니다."
    }
  }
})