import styled from 'styled-components'

export const Card = styled.div`
  width: 300px;
  height: 350px;
  margin: 0 0 5% 0;
  position: relative;
  border-radius: 20px;
  box-shadow:
    0px 2px 20px 0px rgba(0, 0, 0, 0.05),
    0px 8px 32px 0px rgba(0, 0, 0, 0.1);
`

export const CardImg = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 20px;
`
export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  background-color: white;
  border-radius: 20px;
  height: 130px;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
  z-index: 30;
  padding: 0 20px;
`
export const CardDescriptionTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  text-align: start;
`
export const CardDescriptionSubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: start;
`

export const CardFlex = styled.div`
  display: flex;

  width: 300px;
`

export const CardDescriptionLocation = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #827777;
  margin: 0 30px 0 0;
`
export const CardDescriptionMenu = styled.div`
  font-size: 16px;
  font-weight: 400;
`
