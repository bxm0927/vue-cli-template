<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p>{{ count }}, {{ doubleCount }}</p>
    <button @click="add">Add</button>
    <button @click="fetch">FetchCount</button>

    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['count']),
    ...mapState('todo', ['todos']),
    ...mapGetters(['doubleCount']),
  },
  methods: {
    ...mapMutations(['increase']),
    ...mapActions(['fetchCount']),
    add() {
      this.increase({ count: 10 })
    },
    fetch() {
      this.fetchCount({ count: 100 })
    },
  },
}
</script>
