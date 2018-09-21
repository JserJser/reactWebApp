import React from 'react'

class B extends React.Component {
    render() {
        return (
            <p className="bColor">{this.props.userinfo.city}</p>
        )
    }
}

export default B