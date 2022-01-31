<template>
  <div class="task-board" :class="taskType" @click="openTask">
    <span class="task-board__title">{{ title }}</span>
    <p class="task-board__description">{{ shortDescription }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TaskBoard',
  props: {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true, default: '' },
    taskType: { type: String, required: true },
  },
  computed: {
    shortDescription(): String {
      return ( this.description.length <=40) ? this.description : `${this.description.substring(0, 39)}...`
    },
  },
  methods: {
    openTask() {
     this.$store.commit('showTask', this.id)
    },
  },
})
</script>
<style lang="scss" scoped>
.task-board {
  display: flex;
  flex-direction: column;
  padding: 6px;
  margin: 6px;
  width: 200px;
  height: 120px;
  border-radius: 12px;
  color: $c_dark_gray;
  overflow: hidden;
  cursor: pointer;

  &__title {
    font-size: 18px;
    font-weight: bold;
  }

  &__description {
    height: 100%;
  }
}

.todo {
  background-color: $c_todo_light;
}

.doing {
  background-color: $c_doing_light;
}

.done {
  background-color: $c_done_light;
}

.backlog {
  background-color: $c_backlog_light;
}
</style>
