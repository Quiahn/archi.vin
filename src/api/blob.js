import apiUrl from '../apiConfig'
import axios from 'axios'

export const createBlob = (user, data) => {
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
    return axios({
        url: apiUrl + '/list-blobs/',
        method: 'POST',
        headers: {
            Authorization: `Bearer ${user.token}`
        },
        data: user
    })
}

export const showBlob = (id) => {
    return axios({
        url: apiUrl + '/blobs/' + id,
        method: 'GET'
    })
}

export const editBLob = (user, id, data) => {
    return axios({
        url: apiUrl + '/blobs/' + id,
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${user.token}`
        },
        data: data
    })
}

export const deleteBlob = (user, id) => {
    return axios({
        url: apiUrl + '/blobs/' + id,
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    })
}
