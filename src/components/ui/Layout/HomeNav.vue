<script>
  export default {
    data() {
      return {
        menus: ['table', 'random', 'search']
      }
    }
  }
</script>

<template>
  <nav aria-label="navigation bar">
    <ul>
      <li 
        v-for="menu in menus" 
        :key="menu"
      >
        {{ menu }}
      </li>
    </ul>
  </nav>
</template>
