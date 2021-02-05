<template>	
	<app-count-down></app-count-down>

	<app-todo></app-todo>
</template>

<script>
import AppCountDown from './components/AppCountDown'
import AppTodo from './components/AppTodo'

export default {
	components: {
		AppCountDown,	AppTodo
	}
}
</script>