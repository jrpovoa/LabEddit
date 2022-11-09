export const goToSignup = (navigate) => {
    navigate("/signup")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToFeed = (navigate) => {
    navigate("/")
}

export const goToPost = (navigate) => {
    navigate("/post")
}

export const goToComments = (navigate, id) => {
    navigate(`/posts/${id}/comments`)
}

export const goToCreatePost = (navigate) => {
    navigate(`/posts`)
}