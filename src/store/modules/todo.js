const state = () => ({
  todos: [
    { id: 1, text: 'Learning Vue', done: true },
    { id: 2, text: 'Learning React', done: false },
  ],
})

const getters = {
  doneTodos(state) {
    return state.todos.filter((todo) => todo.done)
  },
  // Getter 接受其他 getter 作为第二个参数
  doneTodosCount(state, getters) {
    return getters.doneTodos.length
  },
  // 你也可以通过让 getter 返回一个函数，来实现给 getter 传参
  // 注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
  getTodoById(state) {
    return (id) => state.todos.find((todo) => todo.id === id)
  },
}

const mutations = {
  addTodoItem(state, { todoItem }) {
    state.todos.push(todoItem)
  },
}

export default {
  state,
  getters,
  mutations,
  namespaced: true,
}
