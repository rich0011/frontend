import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  font-size: 1.6rem;
`
export const HeaderAndContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: calc(100% - 10rem);
`
export const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8rem;
  border-bottom: 0.1rem solid var(--border-color);
  background-color: var(--component-color);
  padding: 0 4rem;
`

export const UserWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 50%;
`
export const UserIcon = styled.div`
  margin-right: 2rem;
  width: 4rem;
  height: 4rem;
  border-radius: 10%;
  /* background-color: var(--border-color); */
`
export const Message = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`
export const SideBarWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border-right: 0.1rem solid var(--border-color);
  width: 10rem;
  height: 100vh;
  background-color: var(--component-color);
`
export const NavigationIcon = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin: 1rem auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0px solid var(--border-color);
  &:hover {
    border-color: black;
    border-width: 5px;
  }
  &:active {
    background-color: lightgray;
    border-color: darkgray;
    border-width: 5px; 
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 27.2rem;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 13.2rem;
  height: 3.35rem;
  border-radius: 0.8rem;
  font-size: 1.25rem;
  outline: none;
  background-color: var(--component-color);
  border: 0.1rem solid var(--border-color);

  span {
    display: inline-block
  }
`
export const Img = styled.img`
  /* display: flex; */
  align-items: center;
  width: 13.2rem;
  height: 3.35rem;
  border-radius: 0.8rem;
  font-size: 1.25rem;
  outline: none;
`
export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  width: 13.2rem;
  height: 3.35rem;
  font-size: 1.25rem;
  background-color:white;
  border-color: white;
  border-bottom: 0px;

  span {
    display: inline-block
  }
`
export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  width: 13.2rem;
  height: 3.35rem;
  font-size: 1.25rem;
  background-color:white;
  border-color: white;
  border-bottom: 0px;
  border-right: 0px;

  span {
    display: inline-block
  }
`
export const ButtonIcon = styled.div`
  width: 2.15rem;
  height: 2.2rem;
  margin-right: 0.8rem;
  background-color: var(--border-color);
`
export const SubHeaderWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  width: 100%;
  height: 4.5rem;
  background-color: var(--component-color);
  padding: 0 4rem;
`
export const SelectionOptionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  background-color: var(--component-color);
  margin-top: 0.5rem;
`
export const SelectionSearchButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 50%;
  height: 4rem;
  background-color: var(--component-color);
  margin-top: 0.5rem;
`
export const ContentArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  width: 100%;
  height: 100%;
  padding: 4rem;
`
export const InformationWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 25%;
  height: 100%;
`
export const RegionInformationWrapper = styled.div`
  background-color: var(--component-color);
  width: 100%;
  height: 20%;
  margin-bottom: 5%;
  h5 {
    padding-left: 20%;
    padding-top: 10px;

  }
  p {
    padding-left: 30%;
    padding-top: 15px;

  }
`
export const ChartWrapper = styled.div`
  background-color: var(--component-color);
  width: 100%;
  height: 30%;
  margin-bottom: 5%;
`
export const PieChartWrapper = styled.div`
  background-color: var(--component-color);
  width: 100%;
  height: 40%;
`

export const ContentWrapper = styled.div`
  width: 72%;
  height: 100%;
`
export const SubContentWrapper = styled.div`
  width: 72%;
  height: 20%;
  display: flex;
  align-items: top;
  justify-content: space-between;
  padding: 4rem;
  margin-bottom: 2%;
`
export const MapWrapper = styled.div`
  width: 70%;
  height: 90%;
  background-color: var(--component-color);
`
export const AverageAirTempWrapper = styled.div`
  background-color: var(--component-color);
  width: 100%;
  height: 20%;
  margin-bottom: 5%;
`
export const SeeSurfaceTempWrapper = styled.div`
  background-color: var(--component-color);
  width: 24%;
  height: 20%;

`
export const TempLineChartWrapper = styled.div`
  background-color: var(--component-color);
  width: 36%;
  height: 30%;
  margin-bottom: 2%;
`
export const HistBarChartWrapper = styled.div`
  background-color: var(--component-color);
  width: 36%;
  height: 40%;
`
export const PreciptationWrapper = styled.div`
  background-color: var(--component-color);
  width: 24%;
  height: 20%;
`
export const SolarRadiationWrapper = styled.div`
  background-color: var(--component-color);
  width: 24%;
  height: 20%;
`
export const PolarisRioCodeWrapper = styled.div`
  background-color: var(--component-color);
  width: 100%;
  height: 20%;
  margin-bottom: 5%;
`
export const WindWrapper = styled.div`
  background-color: var(--component-color);
  width: 100%;
  height: 30%;
  margin-bottom: 5%;
`
export const RoutePreciptationWrapper = styled.div`
  background-color: var(--component-color);
  width: 100%;
  height: 30%;
  margin-bottom: 5%;
`
export const IceAlongRouteChartWrapper = styled.div`
  background-color: var(--component-color);
  width: 100%;
  height: 40%;
`
export const AccountWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  font-size: 1.6rem;
`
export const AccountSideBarWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border-right: 0.1rem solid var(--#213f5e);
  width: 40%;
  height: 100dvh;
  background-color: #213f5e;
`
export const BackgroundContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: calc(100% - 40%);
  justify-content: center;
  border-right: 0.1rem solid var(--border-color);
  height: 100%;
`
export const SignUpFormWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border-right: 0.1rem solid var(--#213f5e);
  width: 70%;
  height: 50%;
  margin-left: 10%;
  margin-top: 1%;
  background-color: #213f5e;
  color: white;
`
export const LoginFormWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border-right: 0.1rem solid var(--#213f5e);
  width: 70%;
  height: 40%;
  margin-left: 10%;
  margin-top: 1%;
  background-color: #213f5e;
  color: white;
`
export const LogoImageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 80%;
  height: 10%;
  margin-top: -10rem;
  margin-left: 17%;
  background-color: #213f5e;
`
export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  &:hover {
    border-color: black;
    border-width: 5px;
  }
  &:active {
    background-color: lightgray;
    border-color: darkgray;
    border-width: 5px; 
  }
`