import React, { useState } from 'react';
import { Button, Typography,  TextField, FormControl, FormGroup } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

import ModalDialog from '../../components/ModalDialog';

import './Auth.scss';

const Auth = () => {
  const [visibleModal, setVisibleModal] = useState<'LogIn' | 'Registry'>();

  const handleClickOpenLogIn = (): void => {
    setVisibleModal('LogIn');
  };

  const handleClickOpenRegistry = (): void => {
    setVisibleModal('Registry');
  };

  const handleClickCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <>
      <div className="auth__image-bg" />
      <section className="auth__login">
        <div className="auth__login-wrapper">
          <TwitterIcon color="primary" sx={{ fontSize: 45, mb: 2 }} />
          <Typography variant="h4" component="h4" sx={{ fontSize: 32, fontWeight: 600, mb: 7 }}>Узнайте, что происходит в мире прямо сейчас</Typography>
          <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
          <Button variant="contained" color="primary" fullWidth onClick={handleClickOpenRegistry}>Зарегистрироваться</Button>
          <Button variant="outlined" color="primary" fullWidth onClick={handleClickOpenLogIn}>Войти</Button>

          <ModalDialog open={visibleModal === 'LogIn'} title="Войти в Твиттер" onClose={handleClickCloseModal}>
            <FormControl className="modal-authFormControl" component="fieldset" fullWidth>
              <FormGroup aria-label="position" sx={{ pt: '10px' }} row>
                <TextField
                  className={'modal-loginSideField'}
                  autoFocus
                  id="email"
                  fullWidth
                  type="email"
                  label="E-mail"
                  variant="outlined"
                />
                <TextField
                  className="modal-loginSideField"
                  id="password"
                  fullWidth
                  type="password"
                  label="Пароль"
                  variant="outlined"
                />
              </FormGroup>
              <Button
                variant="contained"
                color="primary"
                fullWidth
              >
                Войти
              </Button>
            </FormControl>
          </ModalDialog>
          <ModalDialog open={visibleModal === 'Registry'} title="Создайте учетную запись" onClose={handleClickCloseModal}>
            <FormControl className="modal-authFormControl" component="fieldset" fullWidth>
              <FormGroup aria-label="position" row sx={{ pt: '10px' }}>
                <TextField
                  className={'modal-loginSideField'}
                  autoFocus
                  id="email"
                  fullWidth
                  type="email"
                  label="E-mail"
                  variant="outlined"
                />
                <TextField
                  className="modal-loginSideField"
                  id="password"
                  fullWidth
                  type="password"
                  label="Пароль"
                  variant="outlined"
                />
              </FormGroup>
              <Button
                variant="contained"
                color="primary"
                fullWidth
              >
                Войти
              </Button>
            </FormControl>
          </ModalDialog>
        </div>
      </section>
    </>
  );
};

export default Auth;
