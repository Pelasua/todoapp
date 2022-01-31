type Task = { id: number, title: string, description: string, type: string }

type Tasks = {
  tasks: Task[]
}

export default {
  addTask(state: Tasks, task: Task) {
    state.tasks.push(task)
  },

  refreshTasks(state: Tasks) {
    state.tasks = JSON.parse(window.localStorage.getItem('tasks') || '{}').data
  }
}
