import { Box } from '@mui/material';
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { commentPost } from '../../services/posts';
import { FormContainer, StyledButton, StyledHr, StyledTextField } from "./styled"
import { CircularProgress } from "@material-ui/core";

const PostForm = () => {
    const [form, onChange, clear] = useForm({ body: "" })

    const params = useParams()

    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        commentPost(params.id, form, clear, setIsLoading)
    }

    return (
        <FormContainer>
            <form onSubmit={onSubmitForm}>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    border={'none'}
                    borderRadius={'12px'}
                >
                    <StyledTextField
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        variant={'outlined'}
                        label={"Adicionar comentário"}
                        multiline
                        rows={4}
                    />
                </Box>
                <StyledButton
                    fullWidth
                    variant="contained"
                    type="submit">
                    {isLoading? <CircularProgress color="inherit" size={24}/>: <> Responder</>}
                </StyledButton>
                <StyledHr/>
            </form>
        </FormContainer>
    )
}

export default PostForm