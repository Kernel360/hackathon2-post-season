import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 1320px;
  height: 124px;
  margin: 0 auto;
  padding: 0 60px;

  border-bottom: 1px solid rgb(195 212 233 / 40%);
`

export const Title = styled.div`
  margin-right: 40px;

  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  color: rgb(53 99 233 / 100%);
  letter-spacing: -3%;
`

export const SearchSection = styled.div`
  display: flex;
  align-items: center;

  width: 492px;
  height: 44px;
  padding: 0 20px;

  border: 1px solid rgb(195 212 233 / 40%);
  border-radius: 70px;
`

export const SearchIcon = styled.div`
  display: flex;
`

export const SearchInput = styled.input`
  display: flex;
  margin-left: 20px;
  border: none;
  outline: none;
`

export const SearchSettingIcon = styled.div`
  margin-left: auto;
`

export const UserSection = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
`

export const IconBorder = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  border: 1px solid rgb(195 212 233 / 40%);
  border-radius: 50%;
`

export const NotificationBadge = styled.div`
  position: absolute;
  top: 2px;
  left: 32px;

  width: 11px;
  height: 11px;

  background-color: rgb(255 68 35 / 100%);
  border-radius: 50%;
`
