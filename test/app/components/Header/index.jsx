import React from 'react'
import './header.less'
class Header extends React.Component{
    render(){
        return(
            <nav>
                <a>首页</a>
                <a>内容页</a>
                <a>更多</a>
            </nav>

        )
    }
}
export default Header