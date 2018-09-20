import React from 'react'
 import './List.less'
class List extends React.Component{
    render(){
        return(
           <div>
               <ul>
                   <li>
                       <div className="left"><img src={require('./images/fly.jpg')} alt=""/></div>
                       <div className="right">大家好，我是邓二宽，我的梦想是瘦二十斤</div>
                   </li>
                  <li>
                       <div className="left"><img src={require('./images/fly.jpg')} alt=""/></div>
                       <div className="right">大家好，我是天天瘦，我的梦想是瘦二十斤</div>
                   </li>
               </ul>
           </div>
        )
    }
}
export default List