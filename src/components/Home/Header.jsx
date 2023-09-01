import React, { useContext } from 'react'
import { Context } from '../../Contexts/AppContext'
import Logout from '../Accounts/Logout'

import {
  HeaderWrapper,
  UserWrapper,
  UserIcon,
  Message,
  ButtonsWrapper,
  Button,
  ButtonIcon,
} from './styled'

const Header = () => {
  const { full_name,isLoggedIn } = useContext(Context)
  const handleLogout = () =>{
  };

  return (
    <>
      <HeaderWrapper>
        <UserWrapper>
          <UserIcon>
          <Logout onLogout={handleLogout} />
          </UserIcon>
          <Message>
          {isLoggedIn ? `${full_name}` : ''}
          </Message>
        </UserWrapper>
        <ButtonsWrapper>
          <Button>
            <ButtonIcon />
            <span>Upload Route</span>
          </Button>
          <Button>
            <ButtonIcon />
            <span>Print PDF</span>
          </Button>
        </ButtonsWrapper>
      </HeaderWrapper>

        

    </>
  )
}

export default Header
