<template>
  <div id="wrapper">
    <nav id="navbar"></nav>
    <task />
    <div id="content">
      <button class="custom_btn">Nueva tarea</button>
      <task-container :title="'To do'" />
      <task-container :title="'Doing'" />
      <task-container :title="'Done'" />
      <task-container :title="'Backlog'" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import taskContainer from '~/components/task-container.vue'

export default Vue.extend({
  name: 'TaskPage',
  components: { taskContainer }
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
