<template>
  <div class="task" @click="exitTaskView($event)">
    <div class="task__background"></div>
    <div class="task__view">
      <div class="task__title">
        <input
          v-model="title"
          type="text"
          maxlength="22"
          placeholder="Título"
        />
      </div>
      <div class="task__description">
        <textarea
          v-model="description"
          type="text"
          maxlength="256"
          placeholder="Escribe una breve descripción"
        ></textarea>
      </div>
      <div class="task__interactions">
        <button v-if="newTask" class="custom_btn" @click="createTask">
          Crear
        </button>
        <button v-if="!newTask" class="custom_btn" @click="modifyTask">
          Modificar
        </button>
        <button
          v-if="!newTask"
          class="custom_btn"
          @click="deleteTask"
        >
          <font-awesome-icon :icon="['fas', 'trash']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TaskView',

  data() {
    const id: any = null
    const title: String = ''
    const description: String = ''
    const newTask: Boolean = true
    const type: String = ''
    return { id, title, description, newTask, type }
  },
  created() {
    if (this.$store.state.showTask.id) {
      this.$store.state.tasks.forEach((task: any) => {
        if (task.id === this.$store.state.showTask.id) {
          this.id = task.id
          this.title = task.title
          this.description = task.description
          this.newTask = false
        }
      })
    }
  },
  methods: {
    createTask() {
      const task = {
        id: new Date().valueOf(),
        title: this.title === '' ? 'Tarea' : this.title,
        description: this.description,
        type: 'todo',
      }
      const tasks = JSON.parse(window.localStorage.getItem('tasks') || '{}')

      tasks.data.push(task)
      window.localStorage.setItem('tasks', JSON.stringify(tasks))
      this.$store.commit('hideTask')
      this.$store.commit('refreshTasks')
    },

    modifyTask() {
      const tasks = JSON.parse(window.localStorage.getItem('tasks') || '{}')

      tasks.data.forEach((task: any) => {
        if (task.id === this.id) {
          task.title = this.title
          task.description = this.description
        }
      })

      window.localStorage.setItem('tasks', JSON.stringify(tasks))
      this.$store.commit('hideTask')
      this.$store.commit('refreshTasks')
    },

    deleteTask() {
      const tasks = JSON.parse(window.localStorage.getItem('tasks') || '{}')

      tasks.data.forEach((task: any, index: number) => {
        if (task.id === this.id) {
          tasks.data.splice(index, 1)
        }
      })

      window.localStorage.setItem('tasks', JSON.stringify(tasks))
       this.$store.commit('hideTask')
      this.$store.commit('refreshTasks')
    },

    exitTaskView(e: any) {
      if (e.target.className === 'task__background') {
        this.$store.commit('hideTask')
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.task {
  position: absolute;
  height: 100%;
  width: 100%;

  &__background {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0.9;
  }

  &__view {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 400px;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    padding: 6px;
  }

  &__title {
    display: flex;
    flex-basis: 60px;
    border-bottom: 1px solid $c_gray;
    font-size: 30px;
    overflow: hidden;
  }

  &__description {
    display: flex;
    height: 100%;
  }

  &__interactions {
    display: flex;
    justify-content: right;
    gap: 6px;
  }

  input,
  textarea {
    height: 100%;
    width: 100%;
    color: $c_dark_gray;
    &,
    &:active,
    &:hover,
    &:focus-visible {
      border: 0;
      box-shadow: none;
      outline: 0;
    }
  }
  textarea {
    resize: none;
  }
}
</style>
