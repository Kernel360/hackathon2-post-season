import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  padding: 0 60px;
  width: 1320px;
  height: 124px;
  border-bottom: 1px solid rgba(195, 212, 233, 0.4);
`

export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -3%;
  color: rgba(53, 99, 233, 1);
  margin-right: 40px;
`

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(195, 212, 233, 0.4);
  border-radius: 70px;
  width: 492px;
  height: 44px;
  padding: 0 20px;
`

export const SearchIcon = styled.div``

export const SearchInput = styled.input`
  display: flex;
  border: none;
  outline: none;
  margin-left: 20px;
`

export const SearchSettingIcon = styled.div`
  margin-left: auto;
`

export const UserSection = styled.div`
  display: flex;
  margin-left: auto;
  gap: 20px;
`

export const IconBorder = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(195, 212, 233, 0.4);
  border-radius: 50%;
  width: 44px;
  height: 44px;
`

export const NotificationBadge = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  top: 2px;
  left: 32px;
  border-radius: 50%;
  background-color: rgba(255, 68, 35, 1);
`
