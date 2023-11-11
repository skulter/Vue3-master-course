<script>
  // export default {
  //   name: "TreeNode"
  // }
</script>

<script setup>
defineProps({
  treeData: {
    type: Array,
    required: false,
  }
})

</script>

<template>
  <ul>
    <li v-for="item in treeData" :key="item.id">
      {{ item.name }}
      <TreeNode :treeData="item.children"></TreeNode>
    </li>
  </ul>
</template>
