export default {
  tasks: JSON.parse(window.localStorage.getItem('tasks') || '{}').data
}
