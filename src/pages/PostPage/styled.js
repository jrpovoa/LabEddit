import { Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 12px;
    height: auto;
    width: 80vw;
    margin: 5vh auto;
    max-width: 400px;
`
export const StyledTextField = styled(TextField)`
    background-color: #EDEDED;
    width: 80vw;
    max-width: 400px;
`

export const StyledButton = styled(Button)`
    color: white;
    height: 6vh;
    max-height: 51px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
    border: 0px;
    border-bottom: none;
    border-radius: 12px;
    margin-top: 3vh;
    margin-bottom: 0%;
    font-family: 'Noto Sans';
    font-style: normal;
    text-transform: none;
    font-weight: 700;
    line-height: 25px;
    max-width: 400px;
`

export const StyledHr = styled.hr`
    width: 80vw;
    max-width: 450px;
    height: 1px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
    border: 0px;
    margin-top: 2vh;
    max-width: 400px;
`