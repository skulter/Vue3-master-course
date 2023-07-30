app.component('app-counter',{
  props: {
    modelValue: Number,
    required: true,
  },
  template: /*html*/`
  <h1>Counter</h1>
  <div>{{modelValue}}</div>
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
      this.modelValue++;
    },
    minusCount() {
      this.modelValue--;
    },
  },
  computed: {
    countText() {
      return this.modelValue <=5 ? '카운터가 5보다 작거나 같습니다.': "카운터가 5보다 큽니다."
    }
  }
})