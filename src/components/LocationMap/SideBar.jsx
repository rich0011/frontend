import React from 'react'
import { navigation } from './constants/navigation'
import { SideBarWrapper, NavigationIcon } from './styled'

const Sidebar = () => {
  return (
    <SideBarWrapper>
      {navigation.map(({ name }, index) => (
        <NavigationIcon key={index}>
          <div>{name}</div>
        </NavigationIcon>
      ))}
    </SideBarWrapper>
  )
}

export default Sidebar
