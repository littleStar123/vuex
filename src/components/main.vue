<template>
	<div>
		<c-list></c-list>
		<shop-car></shop-car>
	</div>
</template>
<script>
import cList from './childList.vue';
import shopCar from './shopping.vue';
export default {
	components: {
		cList,
		shopCar
	},
	data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	}
}
</script>

<style scoped>
</style>