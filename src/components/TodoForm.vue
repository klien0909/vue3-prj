<template >
  <div class="form-wrapper">
    <div>
      <div class="header-wrapper">
        <img src="../assets/note.png" alt="" class="img-note" />
        <button
          class="form-button cursor-pointer get-all-task"
          @click="getAllTask"
        >
          All
        </button>
        <button class="form-button cursor-pointer" @click="getCompletedTask">
          Completed
        </button>
        <button class="form-button cursor-pointer" @click="getUncompletedTask">
          Uncompleted
        </button>
      </div>
      <p style="font-size: 30px; font-weight: 600" class="mb-4">
        Add your tasks below
      </p>
      <div style="display: flex; justify-content: center">
        <input
          v-model="inputTask"
          type="text"
          placeholder="Write here..."
          class="input-text"
        />
        <button
          class="form-button cursor-pointer btn-submit"
          type="submit"
          @click="addTask"
          style="background-color: #aa705c69"
          v-if="!editting"
        >
          Submit
        </button>
        <button
          v-else
          class="form-button cursor-pointer btn-submit"
          type="submit"
          @click="editTask"
          style="background-color: #aa705c69"
        >
          Edit
        </button>
      </div>
    </div>
    <div style="padding: 20px 20px 0 20px">
      <TodoItem
        :item="item"
        v-for="(item, idx) in listTaskToShow"
        :key="idx"
        @edit-task="handleEditTask"
        @delete-task="deleteTask"
      />
    </div>
    <div>
      <button
        class="form-button button-clear mt-4 cursor-pointer"
        @click="clearAllTask"
      >
        Clear all
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import Task from "../model/TaskModel";
import TodoItem from "./TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
  setup() {
    let editingTask = reactive<Task>({ name: "", complete: false });
    let editting = ref(false);
    const store = useStore();
    let inputTask = ref("");
    let listAllTask = computed(() => {
      return JSON.parse(JSON.stringify(store.state.taskList));
    });
    let listTaskToShow = listAllTask;

    const addTask = () => {
      let task: Task = {
        name: inputTask.value,
        complete: false,
      };
      store.commit("addTask", task);
      inputTask.value = "";
    };

    const handleEditTask = (task: Task) => {
      editting.value = true;
      editingTask = task;
      inputTask.value = task.name;
    };

    const editTask = () => {
      editingTask.name = inputTask.value;
      store.commit("editTask", editingTask);
      editting.value = false;
      inputTask.value = "";
    };

    const deleteTask = (task: Task) => {
      store.commit("deleteTask", task);
    };
    const clearAllTask = () => {
      store.commit("clearAllTask");
    };
    const getUncompletedTask = () => {
      console.log();
    };
    const getCompletedTask = () => {
      console.log();
    };
    const getAllTask = () => {
      listTaskToShow = listAllTask;
    };
    return {
      inputTask,
      listAllTask,
      editting,
      listTaskToShow,
      addTask,
      handleEditTask,
      deleteTask,
      editTask,
      clearAllTask,
      getUncompletedTask,
      getCompletedTask,
      getAllTask,
    };
  },
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
.mt-4 {
  margin-top: 16px !important;
}
.mb-4 {
  margin-bottom: 16px !important;
}
.form-wrapper {
  width: 500px;
  height: 700px;
  background-color: #eadccf;
  border-radius: 50px;
  padding: 20px;
}
.img-note {
  width: 80px;
  height: 80px;
  position: relative;
  top: -12px;
}
.header-wrapper {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 20px;
}
.form-button {
  padding: 12px;
  height: 40px;
  border-radius: 20px;
  background-color: #d4c5b0;
  color: #fff;
  font-weight: 600;
  border: none;
}
.form-button:hover {
  opacity: 0.8;
}
.input-text {
  outline: none !important;
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid #ccc;
  background-color: #eadccf;
  width: calc(100% - 90px);
}
.button-clear {
  background-color: red;
}
</style>