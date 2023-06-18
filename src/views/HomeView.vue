<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoList msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoList from "@/components/TodoList.vue"; // @ is an alias to /src

@Options({
  components: {
    TodoList,
  },
})
export default class HomeView extends Vue {}
</script>
