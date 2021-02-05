<template>
	<div class="container">
		<div class="card">
			<h1>Список дел</h1>

			<div class="form">
				<div class="form-control">
					<input v-model="inputText" type="text" placeholder="Название нового дела" @keyup.enter="addTodoLocal" />
				</div>
				<button class="btn primary" @click="addTodoLocal" :disabled="inputText.length < 3">Добавить</button>
			</div>
			<ul class="list" v-for="(todo, idx) in todos" :key="todo.id">
				<app-todo-item 
					:idx="idx"
					:todo="todo"
					@todo-completed="todoCompletedLocal"
					@todo-delete="todoDeleteLocal"
				>
				</app-todo-item>
			</ul>
		</div>
	</div>
</template>

<script>
import AppTodoItem from './AppTodoItem'
import { mapState, mapActions } from 'vuex'

export default {
	data() {
		return {
			inputText: ''
		}
	},
	mounted() {
		this.loadTodosLocal()
	},
	computed: {
		...mapState(['todos'])
	},
	methods: {
		...mapActions(['loadTodos', 'todoCompleted', 'todoDelete', 'addTodo']),

		loadTodosLocal() {
			this.loadTodos()
		},
		todoCompletedLocal(id) {
			this.todoCompleted(id)
		},
		todoDeleteLocal(id) {
			this.todoDelete(id)
		},
		addTodoLocal() {
			this.addTodo(this.inputText)
			this.inputText = ''
		}
	},
	components: {
		AppTodoItem
	}
}
</script>

<style>
</style>
