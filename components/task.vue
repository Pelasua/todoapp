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
      <div v-if="newTask" class="task__interactions">
        <button class="custom_btn" @click="createTask">Crear</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component
export default class Task extends Vue {
  title: String = ''
  description: String = ''

  @Prop({ default: true })
  newTask!: boolean

  createTask() {
    const task = {
      id: new Date().valueOf(),
      title: this.title,
      description: this.description,
      type: 'todo',
    }
    const tasks = JSON.parse(window.localStorage.getItem('tasks') || '{}')

    tasks.data.push(task)
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
    this.$store.commit('refreshTasks')
    this.$emit('toggleTaskView')
  }

  exitTaskView(e: any) {
    if (e.target.className === 'task__background') {
      this.$emit('toggleTaskView')
    }
  }
}
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
