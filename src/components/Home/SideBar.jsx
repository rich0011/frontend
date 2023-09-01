import React from 'react'
import { useNavigate } from 'react-router-dom'
import { navigation } from './constants/navigation'
import { SideBarWrapper, Img, NavigationIcon } from './styled'

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <SideBarWrapper>
      {navigation.map(({ name, path, icon }, index) => (
        <NavigationIcon
           onClick={() => {
            navigate(path)
          }}
           key={index}>
          <div>
          <Img src={icon} alt={name}  /> 
            
          </div>
        </NavigationIcon>
      ))}
    </SideBarWrapper>
  )
}

export default Sidebar
