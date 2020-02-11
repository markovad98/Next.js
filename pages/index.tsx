import React from 'react'
import {connect} from 'react-redux'
import '../styles.scss'

const ExamplePage = ({ staticData }: any) => {
    return (
        <div>{staticData}</div>
    )
}

ExamplePage.getInitialProps = ({store}: any) => {
    store.dispatch({type: 'SOME_ASYNC_ACTION_REQUEST'})
    return { staticData: 'Hello world!!!' }
}

export default connect(state => state)(ExamplePage)