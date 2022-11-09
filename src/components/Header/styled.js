import styled from "styled-components"
import { AppBar, Toolbar } from "@material-ui/core"

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #EDEDED;
`
export const StyledAppBar = styled(AppBar)`
    max-height: 400px;
`

export const InvisibleButton = styled.button`
    visibility: hidden;
`

export const Logo = styled.img`
    width: 10vw;
    max-width: 50px;
    max-height: 100px;
    cursor: pointer;
`

export const HeaderAnchorTag = styled.a`
    color: #4088CB;
    text-decoration: none;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
`

