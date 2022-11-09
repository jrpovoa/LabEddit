import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentsCard from "../../components/CommentsCard/CommentsCard";
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goToComments } from "../../routes/coordinator";
import { dislikeComment, dislikePost, likeComment, likePost } from "../../services/posts";
import PostForm from "./PostForm";
import { CircularProgress } from "@material-ui/core";
import { Stack } from "@mui/material"

const PostPage = () => {

    useProtectedPage()
    const params = useParams()

    const [isLoading, setIsLoading] = useState(false)

    const post = useRequestData([], `${BASE_URL}posts`, setIsLoading)

    const postMap = post.filter((post) => {
        return post.id === params.id
    })

    const navigate = useNavigate()

    const onClickCard = (id) => {
        goToComments(navigate, id)
    }

    const onClickLikePost = (id) => {
        likePost(id)
    }
    const onClickDislikePost = (id) => {
        dislikePost(id)
    }

    const onClickLikeComment = (id) => {
        likeComment(id)
    }
    const onClickDislikeComment = (id) => {
        dislikeComment(id)
    }

    const postCards = postMap.map((post) => {
        return <PostCard
            key= {post.id}
            username = {post.username}
            body = {post.body}
            likes = {post.voteSum}
            comments = {post.commentCount}
            onClickContainer = {() => onClickCard(post.id)}
            onClickLike = {()=> onClickLikePost(post.id)}
            onClickDislike = {()=> onClickDislikePost(post.id)}
            />
    })

    const comments = useRequestData([], `${BASE_URL}posts/${params.id}/comments`, setIsLoading)
    const commentsCard = comments.map((comments) => {
        return <CommentsCard
            key= {comments.id}
            username = {comments.username}
            body = {comments.body}
            likes = {comments.voteSum}
            onClickLike = {() => onClickLikeComment(comments.id)}
            onClickDislike = {() => onClickDislikeComment(comments.id)}
        />
    })


    return (
        <div>
            <Header />
            {isLoading? <Stack alignItems={"center"} marginTop={40}> <CircularProgress color="secondary" size={40}/></Stack>:postCards}
            {isLoading? <></>:<PostForm/>}
            {isLoading? <></>:commentsCard}
        </div>
    )
}

export default PostPage