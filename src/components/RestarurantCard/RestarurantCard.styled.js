import styled from 'styled-components'

export const Card = styled.div`
  width: 300px;
  height: 370px;
  margin: 0 auto;
  position: relative;
  border-radius: 20px;
  //   over-flow: hidden;
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
  height: 150px;
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
  font-size: 20px;
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
