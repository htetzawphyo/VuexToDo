<template>
  <div>
    <select class="form-select my-3" @change="filterTodo(limit)" v-model="limit">
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="150">150</option>
        <option value="200">200</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            limit: null
        }
    },
    methods: mapActions(['filterTodo'])
}
</script>

<style>

</style>