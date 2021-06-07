import React, {useState} from 'react'
import { Container, Header } from 'semantic-ui-react'
import FuncSongForm from './FuncSongForm'
import FuncSongs from './FuncSongs'

const FuncApp = () => {
  const [funcSongs, setFuncSongs] = useState([
    {id: 1, name: 'Bummerland', artist: 'AJR',},
    {id: 2, name: 'Float On', artist: 'Modest Mouse',},
    {id: 3, name: 'The Getaway', artist: 'Red Hot Chilli Peppers',},
    {id: 4, name: 'Dani California', artist: 'Red Hot Chilli Peppers',},
    {id: 5, name: 'Solitary Man', artist: 'Johnny Cash',},
  ])

  const addSong = (song) => {
    // console.log('song',song)
    setFuncSongs( [song, ...funcSongs])
    console.log(funcSongs)
  }

  const editSong = (song) => {
    let updateSong = funcSongs.map(s => s.id === song.id ? song : s)
    setFuncSongs(updateSong)
  }

  const deleteSong = (id) => {
    setFuncSongs(funcSongs.filter(song => song.id !== id))
  }

  return(
    <Container style={{paddingTop: '25px'}}>
      <Header as='h1'>React Functional Music App</Header>
      <FuncSongForm addSong={addSong}/>
      <FuncSongs funcSongs={funcSongs} deleteSong={deleteSong} editSong={editSong}/>
    </Container>
  )
}
export default FuncApp