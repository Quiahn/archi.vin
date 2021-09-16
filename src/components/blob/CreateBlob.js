// import axios from 'axios'
import React from 'react'
import { createBlob } from '../../api/blob'

export default function CreateBlob (props) {
    const submit = e => {
        e.preventDefault()
        const title = e.target.title.value
        const file = e.target.file.files[0]
        // eslint-disable-next-line no-undef
        const data = new FormData()
        data.append('userId', props.user._id)
        data.append('title', title)
        data.append('file', file)
        console.log(data.get('file'))
        // axios.post('http://localhost:4741/blobs', file, { Authorization: `Bearer ${props.user.token}` }).then(res => console.log(res)).catch(err => console.log(err))
        createBlob(props.user, data)
            .then(res => console.log(res))
    }
    return (
        <div>
            <h1>Upload</h1>
            <form onSubmit={submit}>
                <input type="text" name="title" required />
                <input type="file" name="file" accept="audio/AAC, audio/MPEG, audio/WAV, audio/FLAC, .opus" required />
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}
