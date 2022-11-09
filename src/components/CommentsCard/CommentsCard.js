import React from "react";
import { ButtonContainer, LikeContainer, Likes, StyledBody, StyledUsername } from "../PostCard/styled";
import { IconButton } from '@mui/material';
import up from '../../assets/up.png'
import down from '../../assets/down.png'
import { CommentsCardContainer } from "./styled";

const CommentsCard = (props) => {
    return (
        <CommentsCardContainer>
            <StyledUsername>
                Comentário enviado por: {props.username}
            </StyledUsername>
            <StyledBody>
                {props.body}
            </StyledBody>
            <ButtonContainer>
                <LikeContainer>
                    <IconButton size="small" onClick={props.onClickLike}><img src={up} alt='like' /></IconButton>
                    <Likes>{props.likes}</Likes>
                    <IconButton size="small" onClick={props.onClickDislike}><img src={down} alt='dislike' /></IconButton>
                </LikeContainer>
            </ButtonContainer>
        </CommentsCardContainer>
    )
}

export default CommentsCard