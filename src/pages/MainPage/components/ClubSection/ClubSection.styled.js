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
  width: 300px;
  height: 50px;
  background-color: lightcyan;
  display: flex;
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
