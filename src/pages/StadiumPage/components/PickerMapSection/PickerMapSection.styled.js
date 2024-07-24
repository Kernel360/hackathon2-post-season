import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px 0;
`

export const ClubImg = styled.img`
  display: flex;
`

export const CategoryButtonSection = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;
  z-index: 10;
  top: 120px;
  right: 30px;
`

export const Button = styled.button`
  display: flex;
  border: none;
  background-color: #fff;
  padding: 10px 18px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow:
      0px 2px 20px 0px rgba(0, 0, 0, 0.05),
      0px 8px 32px 0px rgba(0, 0, 0, 0.1);
  }
`
