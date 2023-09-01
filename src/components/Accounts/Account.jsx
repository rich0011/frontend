import React from 'react'
import {
  AccountWrapper,
  LogoImageWrapper,
  AccountSideBarWrapper,
  SignUpFormWrapper,
  BackgroundContentWrapper
} from '../Home/styled'
import SignupForm from './SignupForm'
// import logoImage from './src/assets/logo.png';
import logoImage from '../../assets/logo.png';
import background from '../../assets/background.png';


const Account = () => {
  return (
    <AccountWrapper>
        <AccountSideBarWrapper>
          <LogoImageWrapper>
            <img src={logoImage} alt="POLARCTIC" style={{width: '60%'}}/>
          </LogoImageWrapper>
          <SignUpFormWrapper>
            <SignupForm />
          </SignUpFormWrapper>
        </AccountSideBarWrapper>
        <BackgroundContentWrapper>
            <img src={background} alt="" style={{height: '100dvh'}}/>
        </BackgroundContentWrapper>
    </AccountWrapper>
  )
}

export default Account
