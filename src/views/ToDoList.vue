<template>
  <div class="todo-container">
    <h1 class="todo-header">To-Do List</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Add a to-do" class="todo-input" />
      <button type="submit" class="todo-button">Add</button>
    </form>
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const newTodo = ref("");
    const todos = ref([]);

    onMounted(() => {
      console.log("TodoList component mounted.");
    });

    function addTodo() {
      if (newTodo.value) {
        todos.value.push({
          text: newTodo.value,
          id: Date.now(),
        });
        newTodo.value = "";
      }
    }

    return {
      newTodo,
      todos,
      addTodo,
    };
  },
};
</script>

<style scoped>
.todo-container {
  width: 500px;
  margin: 0 auto;
}

.todo-header {
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
}

.todo-input {
  width: 100%;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
}

.todo-button {
  padding: 10px 20px;
  margin-bottom: 10px;

  font-size: 20px;
  background-color: lightblue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.todo-button:hover {
  background-color: rgb(30, 30, 181);
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  background-color: lightgray;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  min-height: 18.4px;
  font-size: 18px;
  font-weight: bold;
}
</style>
