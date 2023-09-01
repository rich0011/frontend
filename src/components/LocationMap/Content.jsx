import React from 'react'
import {
  ContentArea,
  InformationWrapper,
  MapWrapper,
  PolarisRioCodeWrapper,
  WindWrapper,
  RoutePreciptationWrapper,
  IceAlongRouteChartWrapper
} from '../Home/styled'
import IceAlongRouteBarChart from './IceAlongRouteBarChart'
import PolarisRioCode from './PolarisRioCode'
import Preciptation from './Preciptation'
import Wind from './Wind'
import CountryMap from './CountryMap'

export const Content = () => {
  return (
    <ContentArea>
      <InformationWrapper>
        <PolarisRioCodeWrapper>
          <PolarisRioCode />
        </PolarisRioCodeWrapper>
        <WindWrapper>
           <Wind />
        </WindWrapper>
       
        <RoutePreciptationWrapper>
            <Preciptation />
        </RoutePreciptationWrapper>
        <IceAlongRouteChartWrapper>
            <IceAlongRouteBarChart />
        </IceAlongRouteChartWrapper>
      </InformationWrapper>
      <MapWrapper>
        <CountryMap />
      </MapWrapper>
    </ContentArea>
  )
}

export default Content
