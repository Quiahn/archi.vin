// import axios from 'axios'
import React from 'react'
import { createBlob } from '../../api/blob'

export default function CreateBlob (props) {
    const submit = e => {
        e.preventDefault()
        const title = e.target.title.value
        const artist = e.target.artist.value
        const file = e.target.file.files[0]

        // eslint-disable-next-line no-undef
        const data = new FormData()
        data.append('userId', props.user._id)
        data.append('title', title)
        data.append('artist', artist)
        data.append('file', file)

        createBlob(props.user, data)
            .then(res => console.log(res))
    }

    return (
        <div>
            <h1>Upload</h1>
            <form onSubmit={submit}>
                <input type="text" name="title" required />
                <input type="text" name="artist" required />
                <input type="file" name="file" accept="audio/AAC, audio/MPEG, audio/WAV, audio/FLAC, .opus" required />
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}
