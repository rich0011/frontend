import React from 'react'
import {
  ContentArea,
  MapWrapper

} from '../Home/styled'
import WeatherForcast from './WeatherForcast'

export const Content = () => {
  return (
    <ContentArea>
      <MapWrapper>
        <WeatherForcast />
      </MapWrapper>
    </ContentArea>
  )
}

export default Content
