<template>
    <div>
        <h2>{{msg}}</h2><hr/>
        <h3>{{$store.state.a.count}}-{{count}}</h3>
         <p>
            <!-- 固定格式,表示提交一个函数进行执行 -->
            <button @click="$store.commit('add',10)">+</button>
            <button @click="reduce">-</button>
        </p>
        <p>
            <!-- 固定格式,表示提交一个函数进行执行 -->
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>

<script>
import store from '@/vuex/store';
//第二种方法
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
export default {
    data(){
        return{
            msg:'hello'
        }
    },
    /*
    //第一种方法
    computed:{
        count(){
            return this.$store.state.count;
        }
    },*/

    /* 第二种方法
   computed:mapState({
        count:state=>state.count
    }),*/

    //第三种方法
    computed:{
        //加上...代表对computed的拓展
        //...mapState(['count']),
        // count(){
        //     return this.$store.getters.count;
        // }
        //...mapGetters(['count'])
        count(){
            return this.$store.state.a.count;
        }
    },
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction'])
    },
    store
}
</script>