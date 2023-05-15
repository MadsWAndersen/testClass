import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
    },
  },
});
