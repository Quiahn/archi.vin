import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function IndexBlob ({ user, uploads, setUploads }) {
    useEffect(() => {
        console.log(uploads)
    }, [uploads])

    // const uploadsJSX = () => {
    //     if (!uploads) return
    //     return uploads.map((upload, i) =>
    //         <h3 key={i}>
    //             <NavLink to={`/u/${upload._id}`} className='nav-link'>{upload.title}</NavLink>
    //         </h3>)
    // }

    return (
        <div>
            <h1>Your Uploads</h1>
            { uploads && uploads.length !== 0
                ? uploads.map((upload, i) =>
                    <h3 key={i}>
                        <NavLink to={`/u/${upload._id}`} className='nav-link'>{upload.title}</NavLink>
                    </h3>)
                : <h3>No Uploads Found.</h3>}
        </div>
    )
}
