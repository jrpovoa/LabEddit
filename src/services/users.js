import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeed } from "../routes/coordinator"

export const login = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(navigate)
            setIsLoading(false)
        })
        .catch((err) => {
            alert(err.response.data)
            clear()
            setIsLoading(false)
        })
}

export const signup = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(navigate)
        setIsLoading(false)
    })
    .catch((err) => {
        alert(err.response.data)
        clear()
        setIsLoading(false)
    })
}