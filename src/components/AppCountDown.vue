<template>
	<div class="container">
		<div class="card center">
			{{ title }}: {{ counter }}
			<div class="pt-1">
				<button class="btn primary" @click="countDown">Запустить обратный отсчет</button>
				<button class="btn danger" @click="startCountDown = false">Остановитесь!</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Счетчик',
			counter: 60,
			startCountDown: false
		}
	},
	methods: {
		countDown() {
			this.startCountDown = true
			setInterval(() => {
				if (this.startCountDown && this.counter > 0) {
					this.counter--
				}
			}, 1000)
		}
	}
}
</script>
