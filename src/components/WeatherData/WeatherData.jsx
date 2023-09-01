import React from 'react'
import Sidebar from '../Home/SideBar'
import Header from '../Home/Header'
import Content from './Content'
import {
  HomeWrapper,
  HeaderAndContentWrapper
} from '../Home/styled'

const WeatherData = () => {
  return (
    <HomeWrapper>
      <Sidebar />
      <HeaderAndContentWrapper>
        <Header />
        <Content />
      </HeaderAndContentWrapper>
    </HomeWrapper>
  )
}

export default WeatherData
