import React from 'react'
import {
  ContentArea,
  MapWrapper,
} from '../Home/styled'
import IceService from './IceService'


export const Content = () => {
  return (
    <ContentArea>
      <MapWrapper>
        <IceService />
      </MapWrapper>
    </ContentArea>
  )
}

export default Content
