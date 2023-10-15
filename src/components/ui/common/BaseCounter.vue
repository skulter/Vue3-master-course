<script>
  function debounce(fn, delay){

    return function() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        fn.apply(this,arguments)
      }, delay ?? 2000);  
    }
  }
  export default {
    name: "BaseCounter",
    props: ["name"],
    data: function() {
      return {
        count: 0,
        timeout: null
      }
    },
    methods: {
      inc: debounce(function() {
          this.count++;
          
      })
    },
    created: function(){
      this.inc();
    },
  }
</script>

<template>
  <div>{{ name }} {{ count }}</div>
</template>