import styled, {keyframes} from 'styled-components'


export const primary = '#daffed';

export const secondary = '#9bf3f0';

export const color1 = '#473198';

export const color2 = '#4a0d67';

export const color3 = '#adfc92';

export const color4 = 'white';

export const color5 = 'black';

export const AppBody = styled.div`
  background: linear-gradient(to bottom right, ${color1}, ${secondary});
  padding: 25px;
  min-height: 100vh;
`

export const HoverButton = styled.div`
  display: flex;
  background: linear-gradient(to bottom right, ${color3}, ${color1}); 
  justify-content: center;
  cursor: pointer;
  padding: 15px;
  width: auto;
  margin: auto;
  max-width: 400px;
  margin-bottom: 10px;
  border: 2px solid ${color5};
  border-radius: 10px;
  font-size: 1.25em;

  &:hover {
    background: linear-gradient(to bottom right, ${color1}, ${color3}); 
    color: ${color4};
    border: 4px solid ${color4};
    max-width: 410px;
    font-size: 1.35em;
  }
`

export const rotate360 = keyframes`
from {
  transform: rotate(0deg);
} to {
  transform: rotate(720deg);
}
`
export const Rotate = styled.div`

&:hover{
  display: inline-block;
  animation: ${rotate360} 3s ease-in-out infinite alternate;
} 
`
export const ColorChange = keyframes`
  from {
    background-color: ${primary};

  } to {
    background-color: ${color2};
    color: ${color4};
  }
`
export const FormWidth = styled.div`
  width: 300px;
`
export const ClickButton = styled.div`
  display: inline-block;
  animation: ${ColorChange} 10s linear infinite alternate;

`
export const Flex = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`