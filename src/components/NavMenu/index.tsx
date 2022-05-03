import { Button, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import './NavMenu.scss';

const NavMenu: React.FC = (): React.ReactElement => {
  return (
    <ul className="nav">
      <li className="nav__logo">
        <IconButton color="secondary">
          <TwitterIcon sx={{ fontSize: '36px' }} />
        </IconButton>
      </li>
      <li className="nav__item">
        <SearchIcon sx={{ fontSize: '36px' }} />
        <h6 className="nav__item-title">Поиск</h6>
      </li>
      <li className="nav__item">
        <NotificationsNoneIcon sx={{ fontSize: '36px' }} />
        <h6 className="nav__item-title">Уведомления</h6>
      </li>
      <li className="nav__item">
        <EmailOutlinedIcon sx={{ fontSize: '36px' }} />
        <h6 className="nav__item-title">Сообщения</h6>
      </li>
      <li className="nav__item">
        <BookmarkBorderOutlinedIcon sx={{ fontSize: '36px' }} />
        <h6 className="nav__item-title">Закладки</h6>
      </li>
      <li className="nav__item">
        <ListAltOutlinedIcon sx={{ fontSize: '36px' }} />

        <h6 className="nav__item-title">Список</h6>
      </li>
      <li className="nav__item">
        <PersonOutlineOutlinedIcon sx={{ fontSize: '36px' }} />
        <h6 className="nav__item-title">Профиль</h6>
      </li>
      <li className="nav__item"></li>
      <li className="nav__item-button">
        <Button
          className="tweet-btn"
          color="primary"
          variant="contained"
          fullWidth
        >
          Твитнуть
        </Button>
      </li>
    </ul>
  );
};

export default NavMenu;
