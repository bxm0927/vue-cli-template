<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p>{{ count }}, {{ doubleCount }}</p>
    <van-button type="primary" round plain hairline @click="add">Add</van-button>
    <van-button type="primary" round plain hairline @click="fetch">FetchCount</van-button>

    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'
import { getClasses } from '@/apis/classes'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

Vue.use(Button)

export default {
  data() {
    return {
      classes: null,
    }
  },

  computed: {
    ...mapState('global', ['count']),
    ...mapState('todo', ['todos']),
    ...mapGetters('global', ['doubleCount']),
  },

  async mounted() {
    const result = await getClasses()
    this.classes = result.data
  },

  methods: {
    ...mapMutations('global', ['increase']),
    ...mapActions('global', ['fetchCount']),
    add() {
      this.increase({ count: 10 })
    },
    fetch() {
      this.fetchCount({ count: 100 })
    },
  },
}
</script>
