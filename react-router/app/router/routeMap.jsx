import React from 'react'
import {Router,Route,IndexRoute} from 'react-router'

//引入跳转到的页面
import App from '../containers/App'
import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'

// 定义routeMap组件
class RouteMap extends React.Component{
    updateHandle(){
        console.log("每次router变化之后都会触发")
    }
    render(){
        return(
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='list' component={List}/>
                    <Route path='detail/:id/:type' component={Detail}/>
                    <Route path="*" component={NotFound}/>
                    <Route/>                    
                </Route>
            </Router>
        )
    }
}
export default RouteMap


