import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  padding: 120px 0 60px;
`

export const Item = styled.div`
  width: 300px;
  height: 300px;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  box-shadow: 1px 1px 15px lightgrey;
`
export const WeatherArea = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 35px;
  padding: 0 100px;
  background-color: #a4b9e9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
`
export const Link = styled.a`
  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
  &:hover {
    color: black;
  }
  &:active {
    color: black;
  }
  text-decoration: none;
  color: black;
`
export const ImgWeather = styled.img`
  width: 28px;
  height: 28px;
`
export const SpanTemp = styled.span`
  margin-left: 10px;
  color: white;
  font-size: 26px;
`
export const ImgStadium = styled.img`
  width: 100%;
  height: 75%;
  object-fit: fill;
  display: block;
`
export const TitleWrapper = styled.div`
  width: 100%;
  height: 45px;
  background-color: rgb(89, 108, 128);
  font-size: 25px;
  color: white;
  font-weight: bold;
  line-height: 1.6;
  border-radius: 0 0 10px 10px;
`
