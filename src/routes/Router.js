import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom"
import CreatePostPage from "../pages/CreatePostPage/CreatePostPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignupPage from "../pages/SignupPage/SignupPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/signup" element = {<SignupPage/>}/>
                <Route path = "/login" element = {<LoginPage />}/>
                <Route path = "/" element = {<FeedPage />}/>
                <Route path = "/posts/:id/comments" element = {<PostPage />} />
                <Route path = "/posts" element = {<CreatePostPage />} />
                <Route path= "*" element = {<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router