import React from "react";
import { LogoImage, ScreenContainer, SignupButtonContainer, StyledButton2, StyledH1, StyledHr, StyledText } from "./styled";
import logo from "../../assets/logo.png"
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignup } from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <StyledH1>LabEddit</StyledH1>
            <StyledText>O projeto de rede social da Labenu</StyledText>
            <LoginForm/>
            <SignupButtonContainer>
                <StyledHr ></StyledHr>
                <StyledButton2
                    fullWidth
                    variant="contained"
                    onClick={()=> {goToSignup(navigate)}}>
                   Criar uma conta!
                </StyledButton2>
            </SignupButtonContainer>
        </ScreenContainer>

    )
}

export default LoginPage