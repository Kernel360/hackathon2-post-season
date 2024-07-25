import styled from 'styled-components'

export const WeatherWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: rgb(204, 207, 211);
  background-image: url('/src/assets/jpg/imgsky.jpg');
  background-repeat: no-repeat;
  background-position: right center;
  border-radius: 32px;
  box-shadow: 1px 1px 10px lightgrey;
`
export const ImgLocation = styled.img`
  position: absolute;
  left: 35px;
  top: 10px;
  width: 30px;
  height: 30px;
  z-index: 1;
`
export const SpanLocation = styled.span`
  position: absolute;
  left: 80px;
  top: 15px;
  font-size: 20px;
  color: white;
  z-index: 1;
  text-shadow: 1px 1px 1px gray;
`
export const SpanTime = styled.span`
  font-size: 90px;
  color: white;
  position: absolute;
  right: 100px;
  top: 50px;
  text-shadow: 1px 1px 10px gray;
`
export const ImgSky = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  left: 70px;
  top: 55px;
`
export const SpanTemp = styled.span`
  position: absolute;
  font-size: 100px;
  left: 190px;
  top: 50px;
  color: white;
  text-shadow: 1px 1px 10px gray;
`
export const SpanWind = styled.span`
  position: absolute;
  font-size: 60px;
  left: 350px;
  top: 83px;
  color: white;
  text-shadow: 1px 1px 10px gray;
`
