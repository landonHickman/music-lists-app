import React, {useState,} from 'react'
import { Form } from 'semantic-ui-react'

const FuncSongForm = (props) => {
  const {id, addSong} = props
  const [name, setName] = useState(props.name ? props.name : '')
  const [artist, setArtist] = useState(props.artist ? props.artist : '')

  const rando = () => {
    return Math.random()
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(id){
     
      
    } else {
      // console.log('look here', {name, artist, rando})
     addSong({name: name, artist: artist, id: rando()})
    }
    setName('')
    setName('')
  }
  

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
        fluid
        label="Name"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        style={{width: '200px'}}
        />
        <Form.Input
        fluid
        label="Artist"
        placeholder="Artist"
        name="artist"
        value={artist}
        onChange={(e)=>setArtist(e.target.value)}
        style={{width: '200px'}}
        />
        <Form.Button color='blue'>{id ? 'Edit' : 'Add'}</Form.Button>
      </Form.Group>
    </Form>
  )
}
  

export default FuncSongForm