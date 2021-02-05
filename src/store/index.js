import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() {
		return {
			todos: []
		}
	},
  mutations: {
		async loadTodos(state) {
			const { data } = await axios.get('https://vue-practice-my-default-rtdb.firebaseio.com/todos.json')

			const result = Object.keys(data).map(key => {
				return {
					id: key,
					...data[key]
				}
			})

			state.todos = result
		},
		async todoCompleted(state, payload) {
			const todo = state.todos.find(todo => todo.id == payload)
			todo.completed = !todo.completed

			await axios.patch( `https://vue-practice-my-default-rtdb.firebaseio.com/todos/${payload}.json`, {completed: todo.completed} )
		},
		async todoDelete(state, payload) {
			state.todos.splice(state.todos.indexOf(state.todos.find(todo => todo.id == payload)), 1)

			await axios.delete(`https://vue-practice-my-default-rtdb.firebaseio.com/todos/${payload}.json`)
		},
		async addTodo(state, payload) {
			const response = await axios.post('https://vue-practice-my-default-rtdb.firebaseio.com/todos/.json', {
				title: payload,
				completed: false
			})

			state.todos.push({
				id: response.data.name,
				title: payload,
				completed: false
			})
		}
  },
  actions: {
		loadTodos({commit}) {
			commit('loadTodos')
		},
		todoCompleted({commit}, payload) {
			commit('todoCompleted', payload)
		},
		todoDelete({commit}, payload) {
			commit('todoDelete', payload)
		},
		addTodo({commit}, payload) {
			commit('addTodo', payload)
		}
  },
  modules: {
  }
})
