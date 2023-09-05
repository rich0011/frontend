import React, { useContext } from 'react';
import Sidebar from '../Home/SideBar';
import Header from '../Home/Header';
import Content from './Content';
import { Context } from '../../Contexts/AppContext';
import {
  HomeWrapper,
  HeaderAndContentWrapper
} from '../Home/styled'

const WeatherData = () => {
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

export default WeatherData
