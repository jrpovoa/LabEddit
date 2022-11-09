import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeed } from "../routes/coordinator"


export const commentPost = (id, body, clear, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        alert(res.data)
        clear()
        setIsLoading(false)
        window.location.reload()
    }).catch((err) => {
        alert(err)
    })
}

export const createPost = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}posts`, body, {
        headers:{
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        alert(res.data)
        clear()
        setIsLoading(false)
        goToFeed(navigate)
    }).catch((err) => {
        alert(err)
    })
}

export const likePost = (id) => {
    axios.post(`${BASE_URL}posts/${id}/votes`, {"direction": 1}, {
        headers:{
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        alert(res.data)
        window.location.reload()
    }).catch((err) => {
        alert(err)
    })
}

export const dislikePost = (id) => {
    axios.post(`${BASE_URL}posts/${id}/votes`, {"direction": -1}, {
        headers:{
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        alert(res.data)
        window.location.reload()
    }).catch((err) => {
        alert(err)
    })
}

export const likeComment = (id) => {
    axios.post(`${BASE_URL}comments/${id}/votes`, {"direction": 1}, {
        headers:{
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        alert(res.data)
        window.location.reload()
    }).catch((err) => {
        alert(err)
    })
}

export const dislikeComment = (id) => {
    axios.post(`${BASE_URL}comments/${id}/votes`, {"direction": -1}, {
        headers:{
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        alert(res.data)
        window.location.reload()
    }).catch((err) => {
        alert(err)
    })
}