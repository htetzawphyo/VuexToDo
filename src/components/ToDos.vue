<template>
  <div class="container">
    <h3 class="text-primary text-center my-3">ToDo Lists</h3>
    <div class="row">
      <AddTodo></AddTodo>
      <FilterTodo></FilterTodo>
    </div>
    <div class="row">
      <div class="col-md-4 my-3" v-for="todo in myTodos" :key="todo.id">
        <b-card :bg-variant="changeBackground(todo)" text-variant="white" class="text-center" @dblclick="toggle(todo)">
          <b-card-text class="d-flex justify-content-between">
            <span>{{ todo.title }}</span>
            <span>
              <button class="btn btn-danger btn-sm" @click="deleteTodo(todo.id)">Delete</button>
            </span>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import FilterTodo from './FilterTodo'
import AddTodo from './AddTodo'
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    FilterTodo, AddTodo },

  computed: mapGetters(['myTodos']),

  methods: {
    ...mapActions(['getTodos', 'deleteTodo', 'updateTodo']),
    changeBackground(todo) {
      return todo.completed ? 'success' : 'primary' 
    },
    toggle(todo) {
      this.updateTodo(todo);
      return todo.completed = !todo.completed
    }
  },
  mounted() {
    this.getTodos()
  }
}
</script>

<style>

</style>