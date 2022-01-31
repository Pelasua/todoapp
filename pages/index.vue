<template>
  <div id="wrapper">
    <nav id="navbar"></nav>
    <TaskView v-if="taskOpened" />
    <div id="content">
      <button class="custom_btn" @click="showTask">Nueva tarea</button>
      <task-container :title="'To do'" :task-type="'todo'" />
      <task-container :title="'Doing'" :task-type="'doing'" />
      <task-container :title="'Done'" :task-type="'done'" />
      <task-container :title="'Backlog'" :task-type="'backlog'" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head() {
    return {
      title: 'To do app',
    }
  },
  computed: {
    taskOpened() {
      return this.$store.state.showTask.isShowed
    },
  },
  created() {
    this.generateLocalStorage()
  },
  methods: {
    showTask() {
      this.$store.commit('showTask')
    },

    generateLocalStorage() {
      const tasks: any = { data: [] }
      if (!window.localStorage.getItem('tasks')) {
        window.localStorage.setItem('tasks', JSON.stringify(tasks))
      }
    },
  },
})
</script>

<style lang="scss" scoped>
#wrapper {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: $c_gray;
}

#navbar {
  flex-basis: 70px;
  background-color: $c_green;
}

#content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: flex-start;
  flex-basis: 100%;
  padding: 50px 30px;
}

.custom_btn {
  width: 150px;
}
</style>
