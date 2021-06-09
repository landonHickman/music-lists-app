import React from 'react'
import {Container, Header} from "semantic-ui-react";
import Songs from './Songs'
import SongForm from './SongForm'


class App extends React.Component {
  state = {
    songs: [
      {id: 1, name: 'Bummerland', artist: 'AJR',},
      {id: 2, name: 'Float On', artist: 'Modest Mouse',},
      {id: 3, name: 'The Getaway', artist: 'Red Hot Chilli Peppers',},
      {id: 4, name: 'Dani California', artist: 'Red Hot Chilli Peppers',},
      {id: 5, name: 'Solitary Man', artist: 'Johnny Cash',},
    ],
  };

  componentDidMount = () => {
    console.log('component mounted')
  }

  componentDidUpdate(prevProps, prevState){
    console.log('component updated')
    console.log('Previous State', prevState)
    console.log('Current State',this.state)
  
  }

  componentWillUnmount() {
    console.log('component unmounted')
  }

  // addSong = (song) => {
  //   console.log(song)
  //   let newSongs = [...this.state.songs, song]
  //   this.setState({
  //     songs: newSongs
  //   })
  // }
  addSong = (song) => {
    this.setState({songs: [...this.state.songs, song]})
  }

  // deleteSong = (id) => {
  //   let newSongs = this.state.songs.filter(s => s.id !== id)
  //   this.setState({
  //     songs: newSongs
  //   })
  // }
  deleteSong = (id) => {
    this.setState({songs: this.state.songs.filter(s => s.id !== id)})
  }
  
  // editSong = (song) => {
  //   let editedSongs = this.state.songs.map (s => s.id === song.id ? song : s)
  //   this.setState({
  //     songs: editedSongs
  //   })
  // }
  editSong = (song) => {
    this.setState({songs: this.state.songs.map (s => s.id === song.id ? song : s)})
  }

  render(){
    return (
      <Container>
        <Header as='h1'>React Class Music App</Header>
        <br/>
        <SongForm addSong={this.addSong}/>
        <br/>
        <Songs songs={this.state.songs} deleteSong={this.deleteSong} editSong={this.editSong}/>
      </Container>
    )
  }
}
export default App