import { makeStyles } from '@material-ui/core/styles';
import { blackColor, oceanBlueColor, skyBlueColor, smokeWhiteColor, whiteColor } from 'style';
import React from 'react';
import { AUTH_LOGIN_GOOGLE_URL } from 'const/generalConst';
import { openSignInWindow } from 'services/signInWindow';
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles((theme) => ({
  userButton: {
    padding: theme.spacing(1),
    color: `${whiteColor}`,
    textDecoration: 'none',
    '&:hover': {
      color: `${smokeWhiteColor}`,
    },
    cursor: 'pointer',
  },
}));

const LogInLinkGoogle = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const handleClick = () => {
    openSignInWindow(AUTH_LOGIN_GOOGLE_URL, 'Google Authentication');
  };
  return (
    <div onClick={handleClick} className={classes.userButton}>
      {t('login')}
    </div>
  );
};

export default LogInLinkGoogle;
