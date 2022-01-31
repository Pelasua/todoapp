<template>
  <div class="task-board" :class="taskType"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component
export default class TaskBoard extends Vue {
  @Prop({ required: true, type: Number }) readonly id!: number
  @Prop({ required: true, type: String }) readonly title!: string
  @Prop({ required: true, type: String }) readonly description!: string
  @Prop({ required: true, type: String }) readonly taskType!: string
}
</script>
<style lang="scss" scoped>
.task-board {
  width: 200px;
  height: 140px;
  border-radius: 12px;
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
