<template>
    <div>
    	<li v-for="item in shopGoods">{{item.name}}*{{item.toShop}}</li>
    	<div>{{sumMoney}}</div>
    </div>
</template>
<script>
export default {
	name: 'shop-car',
	data () {
	    return {
	    	shopGoods:[],	//放入购物车的货物
	    	sumMoney:0
	    }
	},
	methods:{
		shop(){
			this.sumMoney=this.$store.getters.getSumMoney;
		}
	},
	mounted(){
		this.shopGoods=this.$store.getters.getGoods;
		this.sumMoney=this.$store.getters.getSumMoney;
		window.eventHub.$on('shop',this.shop);
	},
	beforeDestroy: function () {
	  eventHub.$off('shop', this.shop)
	}
}
</script>

<style scoped>
</style>