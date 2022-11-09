import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import logo from "../../assets/logo.png"
import { HeaderAnchorTag, InvisibleButton, Logo, StyledAppBar, StyledToolbar } from './styled';

const Header = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [rightButtonText, setRightButtonText] = useState(token ? "Logout": "Entrar")

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if(token) {
            logout()
            setRightButtonText("Entrar")
            goToLogin(navigate)
        }

        else {
            goToLogin(navigate)
        }
    }
    return (
        <StyledAppBar position="static" >
            <StyledToolbar>
                <InvisibleButton onClick={() => goToFeed(navigate)} variant="contained" color="primary">{rightButtonText}</InvisibleButton>
                <Logo src={logo} onClick={() => goToFeed(navigate)}/>
                <HeaderAnchorTag onClick={() => rightButtonAction()} variant="contained" color="primary">{rightButtonText}</HeaderAnchorTag>
            </StyledToolbar>
        </StyledAppBar>
    );
}

export default Header