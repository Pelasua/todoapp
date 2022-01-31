type Task = { id: number, title: string, description: string, type: string }

type Tasks = {
  tasks: Task[]
}
type ShowTask = {
  showTask: {
    isShowed: boolean,
    id: any
  }
}

export default {

  refreshTasks(state: Tasks) {
    state.tasks = JSON.parse(window.localStorage.getItem('tasks') || '{}').data
  },

  showTask(state: ShowTask, id: Number ) {
    state.showTask.isShowed = true
    state.showTask.id = id
  },

  hideTask(state: ShowTask) {
    state.showTask.isShowed = false
    state.showTask.id = null
  }
}
