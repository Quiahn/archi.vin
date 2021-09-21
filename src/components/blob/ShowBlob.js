import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { showBlob } from '../../api/blob'

function ShowBlob ({ setMsgAlerts, user, match, history }) {
    const [upload, setUpload] = useState({})

    useEffect(() => {
        showBlob(match.params.id)
            .then(res => setUpload(res.data.blob))
            .catch(() =>
                setMsgAlerts(prev => [...prev, {
                    heading: 'Failed getting file.',
                    message: 'File does not exist',
                    variant: 'danger'
                }])
            )
    }, [])

    const uploadJSX = () => {
        if (Object.keys(upload).length === 0) {
            return <h1>404: File Does Not Exist.</h1>
        } else {
            return (
                <div className='border shadow p-3'>
                    <div className='p-2'>
                        <h3 className=''>{upload.title}</h3>
                        <h5>By {upload.artist}</h5>
                    </div>
                    <audio controls>
                        <source src={upload.url} />
                        Your Browser does not support the audio element.
                    </audio>
                </div>
            )
        }
    }
    return (
        <div className='text-center w-100 my-5 d-flex align-items-center justify-content-center'>
            { uploadJSX() }
        </div>
    )
}

export default withRouter(ShowBlob)
