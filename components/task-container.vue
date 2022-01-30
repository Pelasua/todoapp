<template>
  <div class="task-container">
    <div class="title">
      <span class="title__text" :class="titleClassByType">
        {{ title }}
      </span>
      <button class="icon" :class="{'icon--collapsed': arrowIsCollapsed}" @click="arrowIsCollapsed = !arrowIsCollapsed"
        ><font-awesome-icon :icon="['fas', 'chevron-down']"
      /></button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component
export default class TaskContainer extends Vue {

  arrowIsCollapsed: Boolean = false

  @Prop({ required: true, type: String }) readonly title!: string

  get titleClassByType() {
    const titleType: string = this.title
    const titleClasses: any = {
      'To do': 'title__text--todo',
      'Doing': 'title__text--doing',
      'Done': 'title__text--done',
      'Backlog': 'title__text--backlog',
    }

    return titleClasses[titleType]
  }


}
</script>
<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: $c_dark_gray;
  border-bottom: 2px solid $c_dark_gray;

  &__text {
    color: #fff;
    border-radius: 4px;
    display: inline-flex;
    padding: 4px;

    &--todo {
      background-color: $c_todo;
    }

    &--doing {
       background-color: $c_doing;
    }

    &--done {
       background-color: $c_done;
    }

    &--backlog {
       background-color: $c_backlog;
    }
  }
}
</style>
