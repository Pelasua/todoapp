<template>
  <div id="wrapper">
    <nav id="navbar"></nav>

    <div id="content">
      <button class="custom_btn">
        Nueva tarea
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TaskPage',
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
  flex-basis: 100%;
  padding: 50px 30px;
}
</style>
