import apiUrl from '../apiConfig'
import axios from 'axios'

export const createBlob = (user, data) => {
    console.log(data.values())
    return axios({
        method: 'POST',
        url: apiUrl + '/blobs',
        headers: {
            Authorization: `Bearer ${user.token}`
        },
        data: data
    })
}

export const indexBlob = (user) => {
    console.log(user)
    return axios({
        url: apiUrl + '/list-blobs/',
        method: 'POST',
        headers: {
            Authorization: `Bearer ${user.token}`
        },
        data: user
    })
}

export const showBlob = (user, id) => {
    return axios({
        url: apiUrl + '/blobs/' + id,
        method: 'GET'
    })
}

// export const changePassword = (passwords, user) => {
//     return axios({
//         url: apiUrl + '/change-password/',
//         method: 'PATCH',
//         headers: {
//             Authorization: `Bearer ${user.token}`
//         },
//         data: {
//             passwords: {
//                 old: passwords.oldPassword,
//                 new: passwords.newPassword
//             }
//         }
//     })
// }
