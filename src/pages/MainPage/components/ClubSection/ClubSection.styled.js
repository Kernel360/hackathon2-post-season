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
`
export const WeatherArea = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 50px;
  padding: 0px 100px;
  background-color: #a4b9e9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px;
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
export const Img = styled.img`
  width: 35px;
  height: 35px;
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 white);
  filter: opacity(•5) drop-shadow(0 0 0 white);
`
export const Span = styled.span`
  margin-left: 10px;
  color: white;
  font-size: 28px;
`
