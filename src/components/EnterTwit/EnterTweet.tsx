import React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

interface EnterTweetProps {
  user: {
    nickname: string;
    author: string;
    avatarUrl: string;
  };
}

const EnterTweet: React.FC<EnterTweetProps> = ({
  user,
}): React.ReactElement => {
  return (
    <>
      <div className="tweet">
        <div className="tweet__left">
          <Avatar
            alt={`Аватар пользователя ${user.author}`}
            src={user.avatarUrl}
            sx={{ width: 56, height: 56 }}
          />
        </div>
        <div className="tweet__right">
          <div className="tweet__content">
            <TextField
              multiline
              variant="outlined"
              style={{ maxWidth: 500, width: '100%' }}
              required
            />
          </div>
          <div className="tweet__footer tweet-footer">
            <div className="tweet-footer__left">
              <SentimentSatisfiedAltOutlinedIcon />
              <InsertPhotoOutlinedIcon />
            </div>
            <div className="tweet-footer__right" />
          </div>
        </div>
      </div>
      <div className="tweet__indent" />
    </>
  );
};

export default EnterTweet;
