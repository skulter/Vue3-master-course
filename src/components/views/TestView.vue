<script setup>
import TreeNode from "@/components/ui/test/self-reference/TreeNode.vue";

const nestedData = [
  { id: 1, name: 'Folder 1', children: [
    { id: 2, name: 'File 1-1' },
    { id: 3, name: 'File 1-2' }
  ]},
  { id: 4, name: 'Folder 2', children: [
    { id: 5, name: 'File 2-1' },
    { id: 6, name: 'Folder 2-1', children: [
      { id: 7, name: 'File 2-1-1', children: [
        { id: 8, name: 'Folder 2-1-1', children: [
          { id: 9, name: "File 2-1-1-1"}
        ]}
      ]}
    ]}
  ]}
]
</script>

<template>
  <TreeNode :treeData="nestedData"/>
</template>