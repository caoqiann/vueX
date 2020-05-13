import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    //state是一种状态对象 在单页应用中共享值就叫做状态
    count:1
}

const mutations={
        //mutations就是改变状态对象的方法
        add(state,n){
            state.count+=n;
        },
        reduce(state){
            state.count--;
        }
    }

const getters={
    count:function(state){
        return state.count+=20;
    }
}

const actions={
    addAction(context){
        context.commit('add',10);
        setTimeout(()=>context.commit('reduce'),3000);
        console.log('比reduce现执行');
    },
    //把commit包装成一个对象
    reduceAction({commit}){
        commit('reduce')
    }
}

//声明模块组A
const moduleA={
    state,mutations,getters,actions
}

export default new Vuex.Store({
    modules:{a:moduleA}
})