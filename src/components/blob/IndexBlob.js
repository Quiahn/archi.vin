import React, { Component } from 'react'
import { indexBlob } from '../../api/blob'

export default class IndexBlob extends Component {
    constructor (props) {
        super(props)
        this.state = {
            uploads: []
        }
    }

    componentDidMount () {
        indexBlob(this.props.user)
            .then(res => this.setState({ uploads: res.data.blobs }))
    }

    render () {
        let uploadsJSX
        if (this.state.uploads.length === 0) {
            uploadsJSX = <h3>No Uploads Found.</h3>
        } else {
            uploadsJSX = this.state.uploads.map(upload => (
                <div key={upload._id}>
                    <h1>{upload.title}</h1>
                </div>
            ))
        }
        return (
            <div>
                <h1>Your Uploads</h1>
                { uploadsJSX }
            </div>
        )
    }
}
