import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { AppBar, Button, Logo } from 'components/atoms';
import LogInLinkGoogle from './LogInLinkGoogle';
import { useStore } from 'store/storeConfig';
import RootStore from 'store/root.store';
import UserProfileHeader from './UserProfileHeader';
import LanguageMenu from 'components/organisms/LanguageMenu';
import { FEATURE_FLAGS } from 'utils/env.utils';
import anywayLogo from 'assets/anyway.png';
import { SignInIcon } from 'components/atoms/SignInIcon';

const useStyles = makeStyles({
  userSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '12%',
  },
});

const reloadHomePage = () => {
  document.location.href = '/';
};

const Header: FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const store: RootStore = useStore();
  const { userStore } = store;

  const isUserDetailsRequired: boolean = !userStore.userInfo?.meta.isCompleteRegistration;

  useEffect(() => {
    userStore.getUserLoginDetails();
  }, [userStore]);

  let authElement;
  const logo = anywayLogo;
  if (FEATURE_FLAGS.login) {
    //login or logout- depend on authentication state
    if (userStore.isUserAuthenticated) {
      const { ...userDetails } = userStore.userInfo;
      const handleLogout = () => {
        userStore.logOutUser();
      };
      authElement = (
        <UserProfileHeader
          isAdmin={userStore.isAdmin}
          handleLogout={handleLogout}
          isUpdateScreenOpen={isUserDetailsRequired}
          userDetails={userDetails}
        />
      );
    } else {
      authElement = (
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <LogInLinkGoogle />
          <SignInIcon />
        </Box>
      );
    }
  }

  return (
    <AppBar>
      <Logo src={logo} alt={'Anyway'} height={30} onClick={reloadHomePage} />
      <Box className={classes.userSection}>
        {authElement}
      </Box>
    </AppBar>
  );
};

export default observer(Header);
