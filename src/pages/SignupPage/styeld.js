import styled from "styled-components";
import { FormControlLabel } from "@material-ui/core"

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`

export const StyledH1 = styled.h1`
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 34px;
    line-height: 47px;
    margin: 5vh;
`

export const StyleFormControlLabel = styled(FormControlLabel)`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
    align-items: center;
    margin-bottom: 4vh;
`

export const StyledP = styled.p`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    margin-top: 5vh;
    margin-left: 0%;
`

export const AnchorTag = styled.a`
    text-decoration: none;
    color: #4088CB
`