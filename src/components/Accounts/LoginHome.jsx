import React, { useContext } from 'react';
import {
  AccountWrapper,
  LogoImageWrapper,
  AccountSideBarWrapper,
  LoginFormWrapper,
  BackgroundContentWrapper
} from '../Home/styled'
import LoginForm from './LoginForm'
import logoImage from '../../assets/logo.png';
import background from '../../assets/background.png';
import { Context } from '../../Contexts/AppContext'


const LoginHome = () => {
 
  const { full_name, setFullName } = useContext(Context)
  const handleLoginSuccess = (full_name) => {
    setFullName(full_name);
  }
  return (
    <AccountWrapper>
        <AccountSideBarWrapper>
          <LogoImageWrapper>
            <img src={logoImage} alt="POLARCTIC" style={{width: '60%'}}/>
          </LogoImageWrapper>
          <LoginFormWrapper>
          <LoginForm handleLoginSuccess={handleLoginSuccess} />
          </LoginFormWrapper>
        </AccountSideBarWrapper>
        <BackgroundContentWrapper>
            <img src={background} alt="" style={{height: '100dvh'}}/>
        </BackgroundContentWrapper>
    </AccountWrapper>
  )
}

export default LoginHome