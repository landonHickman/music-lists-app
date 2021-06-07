import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import FuncSongs from './FuncSongs'
let funcSongs = [
    {id: 1, name: 'Bummerland', artist: 'AJR',},
    {id: 2, name: 'Float On', artist: 'Modest Mouse',},
    {id: 3, name: 'The Getaway', artist: 'Red Hot Chilli Peppers',},
    {id: 4, name: 'Dani California', artist: 'Red Hot Chilli Peppers',},
    {id: 5, name: 'Solitary Man', artist: 'Johnny Cash',},
]

const FuncApp = () => {
  return(
    <Container style={{paddingTop: '25px'}}>
      <Header as='h1'>React Functional Music App</Header>
      <FuncSongs funcSongs={funcSongs}/>
    </Container>
  )
}
export default FuncApp