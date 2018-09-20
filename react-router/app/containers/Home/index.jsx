import React from 'react'

import {Link} from 'react-router'
import './index.less'

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="divHome">
                    首页
                </div>
                <Link to="/list">to list 跳转页</Link>
            </div>
        )
    }
}
export default Home