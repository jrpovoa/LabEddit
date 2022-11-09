import styled from "styled-components"

export const PostCardContainer = styled.div`
    background-color: #FBFBFB;
    border: 1px solid #E0E0E0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 12px;
    height: auto;
    width: 80vw;
    margin: 5vh auto;
    max-width: 400px;
`

export const StyledUsername = styled.p`
    color: #6F6F6F;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin: 1vh 10px;
`

export const StyledBody = styled.p`
    color: #000000; 
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    margin: 0% 10px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2vh;
`

export const LikeContainer = styled.div`
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    margin: 5px;
`

export const Likes = styled.p`
    display: inline;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 9.56098px;
    line-height: 12px;
    text-align: center;
    color: #6F6F6F;
    padding: 5px;
`

export const CommentsContainer = styled.div`
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    margin: 5px;
`

export const Comments = styled.p`
    display: inline;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 9.56098px;
    line-height: 12px;
    text-align: center;
    color: #6F6F6F;
    padding: 5px;
`