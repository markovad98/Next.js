import React, {Component} from 'react'
import {connect} from 'react-redux'

class ExamplePage extends Component<any, any> {
    static async getInitialProps({store}: any) {
        store.dispatch({type: 'SOME_ASYNC_ACTION_REQUEST'})
        return { staticData: 'Hello world!' }
    }

    render() {
        return <div>{this.props.staticData}</div>
    }
}

export default connect(state => state)(ExamplePage)