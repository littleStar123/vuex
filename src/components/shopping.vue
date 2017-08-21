<template>
    <div>
    	{{getCount()}}
    	<a  @click="adad">123</a>
    </div>
</template>
<script>
export default {
	name: 'shop-car',
	data () {
	    return {
	      msg: ""
	    }
	},
	methods:{
		getCount(){
			return this.$store.getters.getCount;
		},
		adad(){
			 this.$store.dispatch("add");			 
		}
	}
}
</script>

<style scoped>
</style>