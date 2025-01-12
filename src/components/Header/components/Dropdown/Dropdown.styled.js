import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  z-index: 100;
  top: 45px;

  display: flex;
  flex-direction: column;

  width: 180px;
  margin: 0 auto;

  border-radius: 10px;
`

export const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.div`
  box-sizing: border-box;

  :hover {
    background-color: #f8f9fa;
  }
`

export const TitleSection = styled.div`
  padding: 0 8px;
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 48px;
  color: rgb(53 99 233 / 100%);
  text-align: left;
  letter-spacing: -0.03em;
`
