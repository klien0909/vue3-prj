<template>
  <div class="todo-item">
    <span style="font-size: 15px; font-weight: bold; margin-right: 20px">{{
      item.id
    }}</span>
    <div style="display: flex; justify-content: space-between; width: 100%">
      <button class="btn-name">
        <span style="font-size: 15px; font-weight: bold" class="">{{
          item.name
        }}</span>
      </button>
      <div>
        <button class="btn-action" @click="$emit('edit-task', item)">
          <img src="../assets/edit.png" class="img-action" />
        </button>
        <button class="btn-action" @click="$emit('delete-task', item)">
          <img src="../assets/delete.png" class="img-action" />
        </button>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { PropType } from "@vue/runtime-core";
import Task from "../model/TaskModel";
export default {
  props: {
    item: {
      type: Object as PropType<Task>,
      required: true,
    },
  },
  setup() {
    // const editTask = () => {
    //   emit("editTask");
    // };
    // const deleteTask = () => {
    //   emit("deleteTask");
    // };
    return {};
  },
};
</script>

<style>
.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.btn-action,
.btn-name {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.btn-name {
  border-bottom: 1px solid #d8cbbc;
  flex: 1;
  text-align: left;
}
.btn-action {
  background-color: #d0afa0 !important;
  margin-left: 12px;
  border-radius: 12px;
  padding: 4px;
}
.btn-action :hover {
  opacity: 0.7;
}
.img-action {
  width: 20px;
  height: 20px;
}
</style>