import React from "react";
import { ScreenContainer, StyledH1 } from "./styeld";
import { AppBar } from "@material-ui/core";
import { HeaderAnchorTag, InvisibleButton, Logo, StyledToolbar } from "../../components/Header/styled";
import logo from "../../assets/logo.png"
import { goToLogin } from "../../routes/coordinator";
import SignupForm from "./SignupForm";
import { useNavigate } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignupPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()

    return (
        <ScreenContainer>
            <AppBar position="static">
                <StyledToolbar>
                    <InvisibleButton variant="contained" color="primary">Entrar</InvisibleButton>
                    <Logo src={logo} />
                    <HeaderAnchorTag onClick={() => goToLogin(navigate)} variant="contained" color="primary">Entrar</HeaderAnchorTag>
                </StyledToolbar>
            </AppBar>
            <StyledH1> Olá, seja bem vindo ao LabEddit! ;) </StyledH1>
            <SignupForm/>
        </ScreenContainer>
    )
}

export default SignupPage