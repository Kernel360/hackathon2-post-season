import styled from 'styled-components'
export const WeatherWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: rgb(152, 175, 229);
  border-radius: 32px;
`

export const SpanLocation = styled.span`
  position: absolute;
  left: 80px;
  top: 15px;
  font-size: 30px;
  color: white;
`
export const SpanTime = styled.span`
  font-size: 100px;
  color: white;
  position: absolute;
  right: 100px;
  top: 40px;
`
export const Img = styled.img`
  position: absolute;
  left: 35px;
  top: 15px;
  width: 35px;
  height: 35px;
`
