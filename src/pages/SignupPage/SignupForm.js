import { Box } from "@material-ui/core"
import { Checkbox, TextField } from "@mui/material"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { StyledButton } from "../../components/StyledButton"
import useForm from "../../hooks/useForm"
import { signup } from "../../services/users"
import { AnchorTag, InputContainer, StyledP, StyleFormControlLabel } from "./styeld"
import { CircularProgress } from "@material-ui/core";

const SignupForm = () => {
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        signup(form, clear, navigate, setIsLoading)
    }

    return (
        <InputContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    label={"Nome do Usuário"}
                    variant={"outlined"}
                    fullWidth
                    margin="normal"
                    required
                    type={"text"}
                />
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
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
                    variant={"outlined"}
                    fullWidth
                    margin="normal"
                    required
                    type={"password"}
                />
                <StyledP>Ao continuar você concorda com o nosso<AnchorTag href="http://www.google.com"> Contrato de usuário</AnchorTag> e nossa <AnchorTag href="http://www.google.com">Política de Privacidade</AnchorTag>.</StyledP>
                <StyleFormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={
                        <Box component="div" fontSize={13} fontFamily={'Noto Sans'}>
                            Eu concordo em receber emails sobre coisas legais no Labeddit.
                        </Box>
                    }

                />
                <StyledButton
                    fullWidth
                    variant="contained"
                    type="submit"
                    >
                    {isLoading? <CircularProgress color="inherit" size={24}/>: <> Cadastrar</>}
                </StyledButton>
            </form>
        </InputContainer>
    )
}

export default SignupForm