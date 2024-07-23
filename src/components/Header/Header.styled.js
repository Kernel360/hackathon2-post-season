import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  max-width: 1320px;
  height: 124px;
  margin: 0 auto;
  padding: 0 0 30px;

  border-bottom: 1px solid rgb(195 212 233 / 40%);
`
export const HomeLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`
export const Logo = styled.img`
  width: 100px;
  height: 100px;
`

export const Title = styled.div`
  font-size: 40px;
  font-weight: 900;
  color: rgb(53 99 233 / 100%);
  text-align: left;
  letter-spacing: -0.03em;
`
export const TriggerSection = styled.div`
  position: relative;
  margin-left: auto;
`

export const Trigger = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 24px;
  font-weight: 700;
  color: rgb(53 99 233 / 80%);

  background-color: transparent;
  border: none;
`
