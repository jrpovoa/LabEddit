import React from "react";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import CreatePostForm from "./CreatePostForm";

const CreatePostPage = () => {
    useProtectedPage()
    return (
        <div>
            <Header/>
            <CreatePostForm/>
        </div>
    )
}

export default CreatePostPage