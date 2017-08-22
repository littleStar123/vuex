import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    goods:[{
		toShop:1,	//放入购物车
		id:0,
		name:"卤蛋",	//产品名称
		price:2,	//产品价格
		monthlySales:200,//月销量
		praise:99 	//好评
	}],
	sumMoney:2	//购物车总价
}

// 定义所需的 mutations
const mutations = {	
    add(val){
    	state.count++;
    },
    //增加商品（如果有就加1）
    ADDGOODS(state,newGoods){
    	for(var i=0;i<state.goods.length;++i){
    		if(state.goods[i].id==newGoods.id){
    			state.goods[i].toShop=newGoods.toShop;
    			return
    		}
    	}
    	state.goods.push(newGoods);
    },
    //减少商品（如果为1就删除）
    SUBGOODS(state,subGoods){
    	for(var i=0;i<state.goods.length;++i){
    		if(state.goods[i].id==newGoods.id){
    			if(state.goods[i].amount>1)
    			{
    				state.goods[i].amount--;
    			}else{
    				state.goods.splice(i,1);
    			} 
    			break;
    		}
    	}
    },
    CALSUM(){
    	state.sumMoney=0;
    	for(var i=0;i<state.goods.length;++i){
    		state.sumMoney+=(state.goods[i].price*state.goods[i].toShop);
    	}
    },
     SETSUM(state,val){
    	state.setsumMoney=val;
    }
}
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})