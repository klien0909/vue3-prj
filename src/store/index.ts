import { createStore } from 'vuex'
import Task from '../model/TaskModel'
export default createStore({
  state: {
    taskList: [
      {
        id: 1,
        name: 'Learn Vue 3',
        complete: false,
      },
      {
        id: 2,
        name: 'Fix bug application',
        complete: true,
      }
    ] as Task[],
  },
  mutations: {
    addTask(state, task: Task): void {
      const id: number = state.taskList.length + 1;
      task.id = id
      state.taskList.push(task);
    },
    deleteTask(state, task: Task): void {
      state.taskList.splice(state.taskList.findIndex(item => item.id == task.id), 1)
    },
    editTask(state, task: Task): void {
      for (const i in state.taskList) {
        if (state.taskList[i].id === task.id) {
          state.taskList[i].name = task.name;
        }
      }
    },
    completeTask(state, idTask: number): void {
      for (const i in state.taskList) {
        if (state.taskList[i].id === idTask) {
          state.taskList[i].complete = !state.taskList[i].complete;
        }
      }
    },
    clearAllTask(state) {
      state.taskList = []
    }
  },
  modules: {
  }
})
