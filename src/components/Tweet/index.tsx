import React from 'react';
import { Avatar } from '@mui/material';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

import './Tweet.scss';

interface TweetProps {
  user: {
    nickname: string;
    author: string;
    avatarUrl: string;
  };
  text: string;
}

const Tweet: React.FC<TweetProps> = ({ user, text }): React.ReactElement => {
  return (
    <div className="tweet">
      <div className="tweet__left">
        <Avatar
          alt={`Аватар пользователя ${user.author}`}
          src={user.avatarUrl}
          sx={{ width: 56, height: 56 }}
        />
      </div>
      <div className="tweet__right">
        <b className="tweet__nickname">{user.nickname} </b>
        <span className="tweet__text-grey">@{user.author}</span>
        <span className="tweet__text-grey"> ·</span>
        <span className="tweet__text-grey"> 1 ч</span>
        <div className="tweet__content">{text}</div>
        <div className="tweet__buttons tweet-buttons">
          <div className="tweet-buttons__item">
            <ChatBubbleOutlineOutlinedIcon />
            <span>1</span>
          </div>

          <div className="tweet-buttons__item">
            <RepeatIcon />
          </div>

          <div className="tweet-buttons__item">
            <FavoriteBorderOutlinedIcon />
            <span>1</span>
          </div>

          <div className="tweet-buttons__item">
            <IosShareOutlinedIcon />
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
