export default {
  tasks: JSON.parse(window.localStorage.getItem('tasks') || '{}').data,
  showTask: {
    isShowed: false,
    id: null
  }
}
