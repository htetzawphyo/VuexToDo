<template>
  <div>
    <b-input-group>

        <b-form-input type="text" class="shadow-none rounded-0" placeholder="add todo" v-model="newTodo.title"></b-form-input>

        
        <b-button variant="outline-secondary" @click="addTodo(newTodo)">Add Todo</b-button>
    </b-input-group>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    // computed: mapGetters(['setTodo']),
    methods: mapActions(['addTodo']),
    data() {
        return {
            newTodo: {
                title: "",
            }
        }
    }
}
</script>

<style>

</style>