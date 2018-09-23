import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <h1>city</h1>
            </div>
        )
    }
}
module.exports = City
