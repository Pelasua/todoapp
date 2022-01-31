<template>
  <div class="task-container">
    <div class="task-container__title">
      <span class="text" :class="taskType">
        {{ title }}
      </span>
      <button
        class="icon"
        :class="{ 'icon--collapsed': arrowIsCollapsed }"
        @click="arrowIsCollapsed = !arrowIsCollapsed"
      >
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </button>
    </div>
    <div class="task-container__content">
      <div v-for="task in tasks" :key="task.id">
        <TaskBoard
          v-if="task.type === taskType"
          :id="task.id"
          :title="task.title"
          :description="task.description"
          :task-type="taskType"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TaskContainer',
  props: {
    title: { type: String, default: '' },
    taskType: { type: String, default: '' },
  },

  data() {
    const arrowIsCollapsed: Boolean = false
    return { arrowIsCollapsed }
  },

  computed: {
    tasks() {
      return this.$store.state.tasks
    },
  },
})
</script>
<style lang="scss" scoped>
.task-container {
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: $c_dark_gray;
    border-bottom: 2px solid $c_dark_gray;

    & > .text {
      color: #fff;
      border-radius: 4px;
      display: inline-flex;
      padding: 4px;
    }

    .todo {
      background-color: $c_todo;
    }

    .doing {
      background-color: $c_doing;
    }

    .done {
      background-color: $c_done;
    }

    .backlog {
      background-color: $c_backlog;
    }
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    padding: 6px 0;
    gap: 10px;
  }
}
</style>
