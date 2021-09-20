/* eslint-disable no-undef */
/* eslint-disable new-cap */
import React, { useState, useEffect } from 'react'
import Collapse from 'react-bootstrap/esm/Collapse'
import { withRouter } from 'react-router-dom'
import { deleteBlob, editBLob, showBlob } from '../../api/blob'

function ShowBlob ({ setMsgAlerts, user, match }) {
    const [upload, setUpload] = useState({})
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [editOption] = useState(false)
    const [deleteOption] = useState(false)

    useEffect(() => {
        showBlob(match.params.id)
            .then(res => setUpload(res.data.blob))
            .then(() => { setTitle(upload.title); setArtist(upload.artist) })
    }, [])

    const onDelete() => {

    }

    const onEdit() => {
        
    }

    let uploadJSX
    let optionsJSX

    if (Object.keys(this.state.upload).length === 0) {
        uploadJSX = <h1>404: File Does Not Exist.</h1>
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
                    <button onClick={this.onToggleDelete}>Delete</button>
                </>
            )
        }
    }

    return (
        <div>
            { uploadJSX }
            { optionsJSX }
            <Collapse in={this.state.editOption}>
                <form onSubmit={this.onEdit}>
                    <input type="text" name="title" onChange={this.onChange} value={this.state.title} required/>
                    <input type="text" name="artist" onChange={this.onChange} value={this.state.artist} required/>
                    <input type="submit" value="Submit" />
                    <input type="button" onClick={this.onToggleEdit} value="Cancel" />
                </form>
            </Collapse>

            <Collapse in={this.state.deleteOption}>
                <div>
                    <p>Are You Sure?</p>
                    <input type="button" onClick={this.onDelete} value="Delete" />
                    <input type="button" onClick={this.onToggleDelete} value="Cancel" />
                </div>
            </Collapse>
        </div>
    )
}

export default withRouter(ShowBlob)

// class ShowBlob extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             upload: {},
//             title: '',
//             artist: '',
//             editOption: false,
//             deleteOption: false
//         }
//     }

//     componentDidMount () {
//         const { match } = this.props
//         showBlob(match.params.id)
//             .then(res => this.setState({ upload: res.data.blob }))
//             .then(() => this.setState({ title: this.state.upload.title, artist: this.state.upload.artist }))
//             .then(console.log(this.state.upload))
//     }

//     onToggleDelete = () => {
//         this.setState({ deleteOption: !this.state.deleteOption })
//     }

//     onDelete = () => {
//         const { user, match } = this.props
//         deleteBlob(user, match.params.id)
//     }

//     onToggleEdit = () => {
//         this.setState({ editOption: !this.state.editOption })
//     }

//     onEdit = (e) => {
//         e.preventDefault()
//         const { user, match } = this.props
//         const data = { ...this.state.upload }
//         data.title = e.target.title.value
//         data.artist = e.target.artist.value
//         console.log(user)
//         editBLob(user, match.params.id, data)
//     }

//     onChange = (e) => {
//         const newVal = e.target.value
//         e.target.getAttribute('name') === 'title' ? this.setState({ title: newVal }) : this.setState({ artist: newVal })
//     }

//     render () {
//         let uploadJSX
//         let optionsJSX

//         if (Object.keys(this.state.upload).length === 0) {
//             uploadJSX = <h1>404: File Does Not Exist.</h1>
//         } else {
//             uploadJSX = (
//                 <>
//                     <h3>Found File: {this.state.upload.title} By {this.state.upload.artist}</h3>
//                     <audio controls>
//                         <source src={this.state.upload.url} />
//                         Your Browser does not support the audio element.
//                     </audio>
//                 </>
//             )
//             if (this.props.user && this.state.upload.owner === this.props.user._id) {
//                 optionsJSX = (
//                     <>
//                         <button onClick={this.onToggleEdit}>Edit</button>
//                         <button onClick={this.onToggleDelete}>Delete</button>
//                     </>
//                 )
//             }
//         }

//         return (
//             <div>
//                 { uploadJSX }
//                 { optionsJSX }
//                 <Collapse in={this.state.editOption}>
//                     <form onSubmit={this.onEdit}>
//                         <input type="text" name="title" onChange={this.onChange} value={this.state.title} required/>
//                         <input type="text" name="artist" onChange={this.onChange} value={this.state.artist} required/>
//                         <input type="submit" value="Submit" />
//                         <input type="button" onClick={this.onToggleEdit} value="Cancel" />
//                     </form>
//                 </Collapse>

//                 <Collapse in={this.state.deleteOption}>
//                     <div>
//                         <p>Are You Sure?</p>
//                         <input type="button" onClick={this.onDelete} value="Delete" />
//                         <input type="button" onClick={this.onToggleDelete} value="Cancel" />
//                     </div>
//                 </Collapse>
//             </div>
//         )
//     }
// }
