<template>
    <div>服务启停
      <p>{{ count }}</p>
      <p>
        <button type="button" class="btn btn-primary" @click="increment">+</button>
        <button type="button" class="btn btn-default" @click="decrement">-</button>
      </p>
    </div>
</template>

<script>
import store from '../store'

export default {
  name: 'ServiceCtrlCmp',
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style scoped>

</style>
