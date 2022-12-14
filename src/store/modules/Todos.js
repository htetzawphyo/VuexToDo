import axios from "axios";

export default {
    state: {
        todos: []
    },
    getters: {
        myTodos(state) {
            return state.todos;
        }
    },
    mutations: {
        setTodos(state, todos) {
            state.todos = todos
        },
        setTodo(state, newTodo) {
            state.todos.unshift(newTodo)
        },
        removeTodo(state, removeId) {
            state.todos = state.todos.filter( (todo) => {
                return todo.id !== removeId;
            })
        },
        updateTodo(state, todo) {
            state.todos.forEach(t => {
                if(t.id === todo.id){
                    t = todo
                }
            });
        }
    },
    actions: {
        // commit ကို 2 မျိုး သုံးပြထား
        async getTodos({commit}) {
            let res = await axios.get("https://jsonplaceholder.typicode.com/todos")
            let todos = res.data
            commit('setTodos', todos)
        },

        addTodo(context, newTodo) {
            axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
            .then((res) => {
                console.log(res.data)
                context.commit('setTodo', newTodo)
            })
        },

        deleteTodo(context, removeId) {
            axios.delete(`https://jsonplaceholder.typicode.com/todos/${removeId}`)
            .then( () => {
                context.commit('removeTodo', removeId);
            })
        },

        filterTodo(context, limit) {
            axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
            .then ( res => {
                context.commit('setTodos', res.data)
            })
        },

        updateTodo(context, todo) {
            axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)
            .then ( res => {
                context.commit('updateTodo', res.data)
            })
        }
    }
}