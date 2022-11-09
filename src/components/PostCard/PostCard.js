import * as React from 'react';
import { ButtonContainer, Comments, CommentsContainer, LikeContainer, Likes, PostCardContainer, StyledBody, StyledUsername } from './styled';
import up from '../../assets/up.png'
import down from '../../assets/down.png'
import comment from '../../assets/comment.png'
import { IconButton } from '@mui/material';

const PostCard = (props) => {
    return (
        <PostCardContainer>
            <StyledUsername>
                Enviado por: {props.username}
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
                <CommentsContainer>
                    <IconButton size="small"><img src={comment} alt='comment' onClick={props.onClickContainer}/></IconButton>
                    <Comments>{props.comments}</Comments>
                </CommentsContainer>

            </ButtonContainer>
        </PostCardContainer>
    );
}

export default PostCard