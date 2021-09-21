import React, { useState, useEffect, useRef } from 'react'
import Collapse from 'react-bootstrap/esm/Collapse'
import { deleteBlob, editBlob } from '../../api/blob'
import { deleteFailure, deleteSuccess, editFailure, editSuccess } from '../AutoDismissAlert/messages'

export default function OwnerBlob ({ user, index, setIndex, uploads, setUploads, setMsgAlerts, setUpdateUploads }) {
    const [editOption, setEditOption] = useState(false)
    const [deleteOption, setDeleteOption] = useState(false)
    const [upload, setUpload] = useState(null)
    const [audioSrc, setAudioSrc] = useState('')
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [loadingEdit, setLoadingEdit] = useState(false)
    const [loadingDelete, setLoadingDelete] = useState(false)
    const audioRef = useRef(null)

    const updateSong = (source) => {
        setAudioSrc(source)
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.load()
            audioRef.current.play()
        }
    }

    useEffect(() => {
        if (index === null || uploads.length < 1 || !uploads[index]) return
        setUpload(uploads[index])
        updateSong(uploads[index].url)
        setTitle(uploads[index].title)
        setArtist(uploads[index].artist)
    }, [index, uploads])

    if (index === null || uploads.length < 1 || !uploads[index] || !upload) {
        return (
            <div>
                <h5 className='p-3 text-center'>Select any of your uploads.</h5>
            </div>
        )
    }

    const onDelete = (e) => {
        e.preventDefault()
        setLoadingDelete(true)
        if (index > uploads.length - 1) {
            setIndex(null)
        } else {
            deleteBlob(user, upload._id)
                .then(() => setUpdateUploads(true))
                .then(() => setLoadingDelete(false))
                .then(() => setDeleteOption(false))
                .then(() =>
                    setMsgAlerts(prev => [...prev, {
                        heading: 'File Edited Successfully',
                        message: deleteSuccess,
                        variant: 'success'
                    }])
                )
                .catch(() =>
                    setMsgAlerts(prev => [...prev, {
                        heading: 'Edit Failed',
                        message: deleteFailure,
                        variant: 'danger'
                    }])
                )
        }
    }

    const onEdit = (e) => {
        e.preventDefault()
        setLoadingEdit(true)
        const data = { ...upload }
        data.title = title
        data.artist = artist
        editBlob(user, upload._id, data)
            .then(() => setUpdateUploads(true))
            .then(() => setLoadingEdit(false))
            .then(() =>
                setMsgAlerts(prev => [...prev, {
                    heading: 'File Edited Successfully',
                    message: editSuccess,
                    variant: 'success'
                }])
            )
            .then(setEditOption(false))
            .catch(() =>
                setMsgAlerts(prev => [...prev, {
                    heading: 'Edit Failed',
                    message: editFailure,
                    variant: 'danger'
                }])
            )
    }

    return (
        <div className="">
            {!upload
                ? null
                : <div className="p-3 text-center">
                    <h5> {upload.title} by {upload.artist} </h5>
                    <p><small >Date: {upload.createdAt.substring(0, 10)} </small> </p>
                    <div className='w-100 my-4 d-flex justify-content-center align-items-center'>
                        <audio controls preload="auto" ref={audioRef}>
                            <source src={audioSrc} />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    <h5> Public link </h5>
                    <input className="w-100 w-sm-50 mb-4 text-center" value={window.location.href + 'u/' + upload._id} onChange={() => null}/>
                    <div className='text-center'>
                        <div className="d-flex justify-content-center align-items-center">
                            <button className="mx-1 btn btn-dark" onClick={(e) => setEditOption(!editOption)}>Edit</button>
                            <button className="mx-1 btn btn-dark" onClick={(e) => setDeleteOption(!deleteOption)}>Delete</button>
                        </div>
                        <div className='pt-4'>
                            <Collapse className='' in={editOption}>
                                <form id="edit-form" onSubmit={onEdit} >
                                    <div>
                                        <label htmlFor="title">Title:</label> <br/>
                                        <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} required/>
                                    </div>
                                    <div className="pt-2">
                                        <label htmlFor="title">Artist: </label> <br/>
                                        <input type="text" name="artist" onChange={(e) => setArtist(e.target.value)} value={artist} required/>
                                    </div>
                                    { loadingEdit
                                        ? <div className="spinner-border"></div>
                                        : <>
                                            <input type="submit" value="Submit" className="mt-3 mx-1 btn btn-dark" />
                                            <input type="button" onClick={(e) => setEditOption(!editOption)} value="Cancel" className="mt-3 mx-1 btn btn-dark" />
                                        </>
                                    }
                                </form>
                            </Collapse>
                        </div>
                        <div className='pt-4'>
                            <Collapse className='' in={deleteOption}>
                                <div>
                                    <p>Are You Sure?</p>
                                    { loadingDelete
                                        ? <div className="spinner-border"></div>
                                        : <>
                                            <input type="button" className="mx-1 btn btn-dark" onClick={onDelete} value="Confirm" />
                                            <input type="button" className="mx-1 btn btn-dark" onClick={(e) => setDeleteOption(!deleteOption)} value="Cancel" />
                                        </>
                                    }
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>}
        </div>
    )
}
