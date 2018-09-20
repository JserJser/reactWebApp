import React from 'react'

import {hashHistory} from 'react-router'
import './index.less'
class List extends React.Component{
    render(){
        const arr=[1,2,3]
        return(
            <ul className="uList">
                {
                    arr.map((item,index)=>{
                        return <li key={index} onClick={this.clickHandler
                            .bind(this,item)}>js jump to <a>{item}</a></li>
                    })
                }
            </ul>
        )
    }
    clickHandler(value){
        hashHistory.push('/detail/'+value)
    }
}
export default List