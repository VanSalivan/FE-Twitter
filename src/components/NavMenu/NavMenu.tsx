import { Button, Hidden } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import './NavMenu.scss';

const NavMenu: React.FC = (): React.ReactElement => (
  <ul className="nav">
    <li className="nav__item">
      <SearchIcon sx={{ fontSize: '36px' }} />
      <Hidden mdDown>
        <h6 className="nav__item-title">Поиск</h6>
      </Hidden>
    </li>
    <li className="nav__item">
      <NotificationsNoneIcon sx={{ fontSize: '36px' }} />
      <Hidden mdDown>
        <h6 className="nav__item-title">Уведомления</h6>
      </Hidden>
    </li>
    <li className="nav__item">
      <EmailOutlinedIcon sx={{ fontSize: '36px' }} />
      <Hidden mdDown>
        <h6 className="nav__item-title">Сообщения</h6>
      </Hidden>
    </li>
    <li className="nav__item">
      <BookmarkBorderOutlinedIcon sx={{ fontSize: '36px' }} />
      <Hidden mdDown>
        <h6 className="nav__item-title">Закладки</h6>
      </Hidden>
    </li>
    <li className="nav__item">
      <ListAltOutlinedIcon sx={{ fontSize: '36px' }} />
      <Hidden mdDown>
        <h6 className="nav__item-title">Список</h6>
      </Hidden>
    </li>
    <li className="nav__item">
      <PersonOutlineOutlinedIcon sx={{ fontSize: '36px' }} />
      <Hidden mdDown>
        <h6 className="nav__item-title">Профиль</h6>
      </Hidden>
    </li>
    <li className="nav__item-button">
      <Button
        className="tweet-btn"
        color="primary"
        variant="contained"
        fullWidth
      >
        <Hidden mdUp>
          <BorderColorIcon />
        </Hidden>
        <Hidden mdDown>Твитнуть</Hidden>
      </Button>
    </li>
  </ul>
);

export default NavMenu;
