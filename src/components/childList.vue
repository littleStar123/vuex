<template>
    <div>
    	<ul>
    		<li v-for="item in data" @click="add"> 
    			{{item.name}}+{{item.price}}
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
        			name:"1",
        			price:12.1,
        		},{
        			name:"2",
        			price:10.1,
        		},{
        			name:"3",
        			price:18.1,
        		},{
        			name:"4",
        			price:2.1,
        		}]
        	}
        },
        methods:{
        	add(){
        		 this.$store.commit('add')
        	}
        }
    };
</script>
<style scoped>
    li{
    	list-style: none;
    }
</style>