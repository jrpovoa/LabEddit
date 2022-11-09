import React, { useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header/Header"
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import PostCard from "../../components/PostCard/PostCard";
import { useNavigate } from "react-router-dom";
import { goToComments, goToCreatePost } from "../../routes/coordinator";
import { AddPostButton, FeedPageContainer } from "./styled";
import { Add } from "@material-ui/icons";
import { dislikePost, likePost } from "../../services/posts";
import { CircularProgress } from "@material-ui/core";
import { Stack } from "@mui/material";

const FeedPage = () => {
    useProtectedPage()

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const posts = useRequestData([], `${BASE_URL}posts`, setIsLoading)

    const onClickCard = (id) => {
        goToComments(navigate, id)
    }

    const onClickLikePost = (id) => {
        likePost(id)
    }
    const onClickDislikePost = (id) => {
        dislikePost(id)
    }

    const postsCards = posts.map((post) => {
        return <PostCard
            key={post.id}
            username={post.username}
            body={post.body}
            likes={post.voteSum}
            comments={post.commentCount}
            onClickContainer={() => onClickCard(post.id)}
            onClickLike={() => onClickLikePost(post.id)}
            onClickDislike={() => onClickDislikePost(post.id)}
        />
    })
    return (
        <FeedPageContainer>
            <Header />
            {isLoading? <Stack alignItems={"center"} marginTop={40}> <CircularProgress color="secondary" size={40}/></Stack>:postsCards}
            <AddPostButton onClick={() => goToCreatePost(navigate)}> <Add color="primary" /></AddPostButton>
        </FeedPageContainer>
    )
}

export default FeedPage