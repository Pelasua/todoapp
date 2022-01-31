<template>
  <div id="wrapper">
    <nav id="navbar"></nav>
    <task v-if="taskOpened" @toggleTaskView="toggleTaskView" />
    <div id="content">
      <button class="custom_btn" @click="toggleTaskView">Nueva tarea</button>
      <task-container :title="'To do'" :task-type="'todo'" />
      <task-container :title="'Doing'" :task-type="'doing'"/>
      <task-container :title="'Done'" :task-type="'done'" />
      <task-container :title="'Backlog'" :task-type="'backlog'" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import taskContainer from '~/components/task-container.vue'
@Component({
  components: { taskContainer },
})
export default class TaskPage extends Vue {
  taskOpened: boolean = false

  created() {
    this.generateLocalStorage()
  }

  toggleTaskView() {
    this.taskOpened = !this.taskOpened
  }

  generateLocalStorage() {
    const tasks: any = {data: []}
    if (!window.localStorage.getItem('tasks')) {
      window.localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }
}
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
