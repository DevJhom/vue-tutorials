<template>
  <div class="container">
    <add-todo></add-todo>
    <filter-todo></filter-todo>
    <todo-lists></todo-lists>
  </div>
</template>

<script>
import TodoLists from "./components/TodoLists.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodo from "./components/FilterTodo.vue";

export default {
  name: "App",
  components: {
    TodoLists,
    AddTodo,
    FilterTodo
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
