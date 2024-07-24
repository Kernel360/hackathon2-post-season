import styled from 'styled-components'

export const WeatherWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: rgb(152, 175, 229);
  border-radius: 32px;
`
export const ImgLocation = styled.img`
  position: absolute;
  left: 35px;
  top: 15px;
  width: 35px;
  height: 35px;
  z-index: 1;
`
export const SpanLocation = styled.span`
  position: absolute;
  left: 80px;
  top: 15px;
  font-size: 30px;
  color: white;
  z-index: 1;
`
export const SpanTime = styled.span`
  font-size: 100px;
  color: white;
  position: absolute;
  right: 100px;
  top: 40px;
`
export const ImgSky = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  left: 100px;
  top: 50px;
`
export const SpanTemp = styled.span`
  position: absolute;
  font-size: 100px;
  left: 200px;
  top: 50px;
  color: white;
`
export const SpanWind = styled.span`
  position: absolute;
  font-size: 100px;
  left: 500px;
  top: 50px;
  color: white;
`
