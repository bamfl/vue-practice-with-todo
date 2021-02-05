<template>
	<li class="list-item">
		<div>
			<input 
				:checked="todo.completed" 
				type="checkbox" 
				name="completed"
				@click="todoCompleted"
			/>

			<strong>{{ idx + 1 }}</strong>

			<span :class="['title', { completed: todo.completed }]">{{ todo.title }}</span>
		</div>

		<span v-if="todo.completed" class="close" @click="$emit('todo-delete', todo.id)">&times;</span>
	</li>
</template>

<script>
export default {
	emits: ['todo-completed', 'todo-delete'],
	props: {
		todo: Object,
		idx: Number
	},
	methods: {
		todoCompleted() {
			this.$emit('todo-completed', this.todo.id, this.todo.completed)
		}
	}
}
</script>

<style lang="scss" scoped>
	.title {
		margin: 0px 0px 0px 10px;
	}
	.close {
		padding: 10px;
		border-radius: 50%;
		background-color: red;
		color: #fff;
		display: flex;
		justify-content:center;
		align-items: center;
		width: 25px;
		height: 25px;
		cursor: pointer;
	}
	.completed {
		text-decoration: line-through;
	}
</style>
