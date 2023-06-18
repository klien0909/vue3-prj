<template >
  <div class="todo-list">
    <TodoForm />
  </div>
</template>

<script>
import TodoForm from "./TodoForm.vue";
export default {
  components: {
    TodoForm,
  },
};
</script>

<style>
.todo-list {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f4f0;
  height: 100%;
}
</style>