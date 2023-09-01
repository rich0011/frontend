import React from 'react'
import {
  HeaderWrapper,
  UserWrapper,
  UserIcon,
  Message,
  ButtonsWrapper,
  Button,
  ButtonIcon,
  SubHeaderWrapper
} from './styled'

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <UserWrapper>
          <UserIcon />
          <Message>Hello Jane!</Message>
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
      <SubHeaderWrapper>
        <span>Route</span>
      </SubHeaderWrapper>
    </>
  )
}

export default Header
