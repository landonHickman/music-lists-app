import React from 'react'
import { Form } from 'semantic-ui-react';

class SongForm extends React.Component {
  state = {name: "", artist: "", };

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addSong({
      name: this.state.name,
      artist: this.state.artist,
      id: Math.random()
    })
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
  
  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
          fluid
          label="Name"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          />
          <Form.Input
          fluid
          label="Artist"
          placeholder="Artist"
          name="artist"
          value={this.state.artist}
          onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}
export default SongForm