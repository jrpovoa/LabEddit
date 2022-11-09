import styled from "styled-components";
import { Button } from "@material-ui/core"


export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`

export const LogoImage = styled.img`
    width: 70vw;
    max-width: 100px;
    margin-top: 10vh;
`

export const StyledH1 = styled.h1`
    font-family: 'IBM Plex Sans';
    font-style: bold;
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;
    margin-top: 0%;
    margin-bottom: 0%;
`

export const StyledText = styled.p`
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    margin-top: 0%;
    margin-bottom: 6vh;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
    align-items: center;
    margin-bottom: 4vh;
`

export const StyledHr = styled.hr`
    width: 80vw;
    max-width: 450px;
    height: 1px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
    border: 0px;
    margin-top: 0vh;
    margin-bottom: 4vh;
`

export const SignupButtonContainer = styled.div`
    width: 80vw;
    max-width: 450px;
`

export const StyledButton2 = styled(Button)`
    height: 6vh;
    color: white;
    max-height: 51px;
    background: linear-gradient(90deg, #F9B24E 0%, #FF6489 100%), #4088CB;;
    border-color: #FE7E02;
    text-transform: none;
    border: 0px;
    border-radius: 27px;
    font-family: 'Noto Sans';
    font-style: normal;
    text-transform: none;
    font-weight: 700;
    line-height: 25px;
`

