import { Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/posts";
import { FormContainer, StyledButton, StyledHr, StyledTextField } from "./styled";
import { CircularProgress } from "@material-ui/core";

const CreatePostForm = () => {
    const [form, onChange, clear] = useForm({ title: "", body: "" })
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear, navigate, setIsLoading)
    }
    return (
        <FormContainer>
            <form onSubmit={onSubmitForm}>
                <StyledTextField
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    variant={'outlined'}
                    label={"Título do Post"}
                    margin={"normal"}
                />
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <StyledTextField
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        variant={'outlined'}
                        label={"Escreva seu post..."}
                        multiline
                        rows={4}
                        margin={"normal"}
                    />
                </Box>
                <StyledButton
                    fullWidth
                    variant="contained"
                    type="submit">
                    {isLoading? <CircularProgress color="inherit" size={24}/>: <> Postar</>}
                </StyledButton>
                <StyledHr/>
            </form>
        </FormContainer>
    )
}

export default CreatePostForm