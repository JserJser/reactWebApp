import React from 'react'
import common from '../../static/css/common.less'
import Header from '../../components/Header'
import Carousel from './subpage/Carousel'
import List from './subpage/List'
import Recommend from './subpage/Recommend'
import './index.less'
class Hello extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            now:Date.now()
        }
    }
    render(){
       return (
           <div>
            <Header title="hello header"/>
            <button onClick={this.clickHandler.bind(this)}>点击数据更改 {this.state.now}</button>
            <Carousel/>
            <hr/>
            <List/>
            <Recommend/>

       </div>
       )
    }
clickHandler(){
    this.setState({
        now:Date.now()
    })
}
componentDidMount(){

}
componentdidUpdate(prevProps,prevState){
    console.log(11111111);
}
}
export default Hello