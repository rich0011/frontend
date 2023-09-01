import React, { useContext } from 'react';
import Sidebar from './SideBar'
import Header from './Header'
import Content from './Content'
import { Context } from '../../Contexts/AppContext'
import {
  HomeWrapper,
  HeaderAndContentWrapper
} from './styled'

const Home = () => {
  const { email } = useContext(Context)
  return (
    <HomeWrapper>
      <Sidebar />
      <HeaderAndContentWrapper>
        <Header email={email} />
        <Content />
      </HeaderAndContentWrapper>
    </HomeWrapper>
  )
}

export default Home
