import React, { useState } from 'react'
import { createBlob } from '../../api/blob'
import { uploadFailure, uploadSuccess } from '../AutoDismissAlert/messages'

export default function CreateBlob (props) {
    const [loadingUpload, setLoadingUpload] = useState(false)
    const { setUploads } = props
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
        setLoadingUpload(true)
        createBlob(props.user, data)
            .then(res => setUploads(prev => [...prev, res.data.blob]))
            .then(() => { document.getElementById('upload-form').reset() })
            .then(() => setLoadingUpload(false))
            .then(() =>
                props.setMsgAlerts(prev => [...prev, {
                    heading: 'File Uploaded Successfully',
                    message: uploadSuccess,
                    variant: 'success'
                }])
            )
            .catch(() =>
                props.setMsgAlerts(prev => [...prev, {
                    heading: 'File Upload Failed',
                    message: uploadFailure,
                    variant: 'danger'
                }])
            )
    }

    return (
        <div className="w-50 mx-auto text-center">
            <h3 className='my-2'>Upload A File</h3>
            <form className="my-3" id='upload-form' onSubmit={submit}>
                <div className=''>
                    <label className='form-label' htmlFor='title'>Title:</label>
                    <br/>
                    <input className='form-control' id='title' type="text" name="title" required />
                    <br/>
                    <label className='form-label' htmlFor='artist'>Artist:</label>
                    <br/>
                    <input className='form-control mb-2' id='artist' type="text" name="artist" required />
                </div>
                <br/>
                <input className='form-control' type="file" name="file" accept="audio/AAC, audio/MPEG, a /WAV, audio/FLAC, .opus" required />
                <br/>
                {loadingUpload ? <div className="spinner-grow text-secondary" /> : <button type="submit" className='btn btn-dark'>Upload</button>}
            </form>
        </div>
    )
}
