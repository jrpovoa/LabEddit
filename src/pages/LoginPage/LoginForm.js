import React, { useState } from "react";
import { InputContainer } from "./styled";
import TextField from '@mui/material/TextField';
import useForm from "../../hooks/useForm";
import { StyledButton } from "../../components/StyledButton";
import { login } from "../../services/users";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";


const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const onSubmitForm =  (event) => {
        event.preventDefault()
        login(form, clear, navigate, setIsLoading)
    }

    return (
            <InputContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"Email"}
                        variant={"outlined"}
                        fullWidth
                        margin="normal"
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        type={"password"}
                    />
                    <StyledButton
                        fullWidth
                        variant="contained"
                        type="submit">
                        {isLoading? <CircularProgress color="inherit" size={24}/>: <>Continuar</>}
                    </StyledButton>
                </form>
            </InputContainer>
    )
}

export default LoginForm