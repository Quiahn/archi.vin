import React, { useState } from 'react'
import OwnerBlob from './OwnerBlob'

export default function IndexBlob ({ setUpdateUploads, user, uploads, setUploads, setMsgAlerts }) {
    const [index, setIndex] = useState(null)

    return (
        <div className="row">
            <div className="pt-3 col-12 col-md-4 text-center">
                <h3>Your Uploads</h3>

                { uploads && uploads.length !== 0
                    ? uploads.map((upload, i) =>
                        <h6 key={i} className='pe-pointer my-3 text-start' onClick={() => setIndex(i)}>
                            {upload.title}  <span className="text-secondary"> by {upload.artist} </span>
                        </h6>)
                    : <h5>No Uploads Found.</h5>}
            </div>

            <div className="col-12 col-md-8 bg-light mt-3">
                <OwnerBlob setUpdateUploads={setUpdateUploads} user={user} index={index} setIndex ={setIndex} setMsgAlerts={setMsgAlerts} uploads={uploads} setUploads={setUploads}/>
            </div>
        </div>
    )
}
