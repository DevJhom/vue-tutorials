<template>
  <div class="container">
    <TodoLists />
  </div>
</template>

<script>
import TodoLists from "./components/TodoLists.vue";

export default {
  name: "App",
  components: {
    TodoLists,
  },
};
</script>

<style>
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
