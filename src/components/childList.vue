<template>
    <div>
    	<ul>
    		<li v-for="item in data" @click="add" class="goodsBlock"> 
    			<img src="" alt="" height="80" width="80"/>
    			<div class="introduce">
    				<ul>
    					<li class="goodsName">{{item.name}}</li>
    					<li class="goodsSales">
    						<span>月销量{{item.monthlySales}}份</span>
    						<span>好评率{{item.praise}}%</span>
    					</li>
    					<li class="goodsPraise">￥<em>{{item.price}}</em></li>
    				</ul>
    			</div>
    			<div class="addGoods">
    				<span class="sub" v-show="item.toShop!=0" style="left:-5px" @click="subGood(item)">-</span>
    				<span v-show="item.toShop!=0" style="right:25px;bottom:12px">{{item.toShop}}</span>
    				<span class="add" style="right:5px" @click="addGood(item)">+</span>
    			</div>
    		</li>
    	</ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'c-list',
        data(){
        	return {
        		data:[{
        			toShop:1,	//放入购物车
        			id:0,
        			name:"卤蛋",	//产品名称
        			price:2,	//产品价格
        			monthlySales:200,//月销量
        			praise:99 	//好评
        		},{
        			toShop:0,	//放入购物车
        			id:1,
        			name:"香肠",
        			price:5,
        			monthlySales:150,//月销量
        			praise:98 	//好评
        		},{
        			toShop:0,	//放入购物车
        			id:2,
        			name:"玉米饮",
        			price:3,
        			monthlySales:2050,//月销量
        			praise:88 	//好评
        		},{
        			toShop:0,	//放入购物车
        			id:3,
        			name:"荷包蛋",
        			price:2,
        			monthlySales:205,//月销量
        			praise:90 	//好评
        		}]
        	}
        },
        methods:{
        	add(){
        		 //this.$store.commit('add')
        	},
        	addGood(goods){
        		goods.toShop++;
        		this.$store.dispatch("addGoods",goods);
        		//this.$store.commit('ADDGOODS',goods);
        		this.$store.dispatch("calSum");
        		window.eventHub.$emit('shop');
        	},
        	subGood(goods){
        		goods.toShop--;
        		this.$store.dispatch("subGoods",goods);
        		window.eventHub.$emit('shop');
        	}
        }
    };
</script>
<style scoped>
	li{
		list-style: none;
	}
    .goodsBlock{
    	width: 300px;
    	height:100px;
    	background-color: #eeeeee;
    	margin: 20px;
    }
    .goodsBlock img{
    	margin: 10px;
    	border-radius:1em ;
    	float: left;
    }
    .introduce{
    	float: left;
    	padding: 20px 0;
    	width: 150px;
    }
    .introduce ul{
    	margin: 0;
    	padding: 0;
    }
    .introduce .goodsName{
    	font-weight:bold ;
    }
    .introduce .goodsSales span{
    	font-size:12px ;
    }
    .introduce .goodsPraise {
    	color:#ff3d00;
    }
    .goodsBlock .addGoods{
    	width: 50px;
    	height: 100px;
    	float: right;
    	position: relative;
    }
    .addGoods span{
    	position: absolute;
    	display: inline-block;
    	bottom:15px;
    }
    .addGoods .add,.addGoods .sub{
    	width: 14px;
    	font-size: 14px;
    	height: 14px;
    	line-height:12px;
    	color:#ffffff;
    	background-color: #6559d4;
    	border-radius: 7px;
    	cursor: pointer;
    }
</style>