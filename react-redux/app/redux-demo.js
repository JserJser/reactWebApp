import {createStore} from 'redux'

export default function(){
    //jisuanguize
    function counter(state=0,action){
        switch(action.type){
            case 'INCREMENT':
                return state+1
            case 'DECREMENT':
                return state-1
            default:
                return state
        }
    }
    //根据计算规则生成store
    let store=create(counter)
    //定义数据即state变化之后的派发规则
        store.subscribe(()=>{
            console.log('current state',store.getState())
        })
    //触发数据变化
        store.dispath({type:'INCREMENT'})
        store.dispath({type:'INCREMENT'})
        store.dispath({type:'DECREMENT'})
}