import React from 'react'
import './index.less'
class Detail extends React.Component{
    render(){
       return(
            <div>
                <span>Detail ,url参数:<a className="addA">{this.props.params.id}</a> 
                type值为 <a className="addB">{this.props.params.type}</a></span>
            </div>
       )
    }
}
export default Detail