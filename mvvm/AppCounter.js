app.component('app-counter',{
  props: {
    modelValue: Number,
    required: true,
  },
  template: /*html*/`
  <h1>Counter</h1>
  <div>{{modelValue}}</div>
  <div>{{countText}}</div>
  <button @click="$emit('plusCount')">+</button>
  <button @click="$emit('minusCount')">-</button>
  `,
  computed: {
    countText() {
      return this.modelValue <=5 ? '카운터가 5보다 작거나 같습니다.': "카운터가 5보다 큽니다."
    }
  }
})