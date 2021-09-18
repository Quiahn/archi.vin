/* eslint-disable no-undef */
/* eslint-disable new-cap */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { showBlob } from '../../api/blob'

class ShowBlob extends Component {
    constructor (props) {
        super(props)
        this.state = {
            upload: {},
            editOption: false,
            deleteOption: false
        }
    }

    componentDidMount () {
        const { match, user } = this.props
        showBlob(user, match.params.id)
            .then((res) => this.setState({ upload: res.data.blob }))
    }

    onToggleDelete = () => {
        this.setState({ editOption: !deleteOption })
    }

    onDelete = () => {

    }

    onToggleEdit = () => {
        this.setState({ editOption: !editOption })
    }

    onEdit = () => {

    }

    render () {
        let uploadJSX
        let optionsJSX

        let editOptionJSX = (
            <form>
                <input />
                <input />
            </form>
        )

        let deleteOptionJSX = (
            <>
                <p>Are You Sure?</p>
                <input type="button" onClick={this.onDelete} />
                <input type="button" onClick={this.onToggleDelete} />
            </>
        )

        if (Object.keys(this.state.upload).length === 0) {
            uploadJSX = <h3>File Does Not Exist.</h3>
        } else {
            uploadJSX = (
                <>
                    <h3>Found File: {this.state.upload.title} By {this.state.upload.artist}</h3>
                    <audio controls>
                        <source src={this.state.upload.url} />
                        Your Browser does not support the audio element.
                    </audio>
                </>
            )
            if (this.props.user && this.state.upload.owner === this.props.user._id) {
                optionsJSX = (
                    <>
                        <button onClick={this.onToggleEdit}>Edit</button>
                        {}
                        <button onClick={this.onToggleDelete}>Delete</button>
                    </>
                )
            }
        }

        return (
            <div>
                { uploadJSX }
                { optionsJSX }
                { editOptionJSX }
                { deleteOptionJSX }
            </div>
        )
    }
}

export default withRouter(ShowBlob)
