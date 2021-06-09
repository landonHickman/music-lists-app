import React from 'react'
import { Form } from 'semantic-ui-react';
import { color5, Flex, Rotate} from './styles';

class SongForm extends React.Component {
  //have to set state equal to props so that name/artist would show up in the input box.
  //also we have to pass props down so it will be visible in the box.
  state = {
    name: this.props.name ? this.props.name : '', 
    artist: this.props.artist ? this.props.artist : '', 
    id: this.props.id ? this.props.id : '',
  };

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.props.id){
      //very similar to add except I need to pass the id back up. also used this.props.id
      // to separate between edit and add form.
      this.props.editSong({
        name: this.state.name,
        artist: this.state.artist,
        id: this.state.id,
      })
    } else {
      this.props.addSong({
        name: this.state.name,
        artist: this.state.artist,
        id: Math.floor((1 + Math.random())* 1000)
      })
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
  
  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Flex >
        <Form.Group widths="equal">
          <Form.Input
          fluid
          label="Name"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          style={{width: '200px'}}
          />
          </Form.Group>
          <Form.Group widths="equal">
          <Form.Input
          fluid
          label="Artist"
          placeholder="Artist"
          name="artist"
          value={this.state.artist}
          onChange={this.handleChange}
          style={{width: '200px'}}
          />
        </Form.Group>
          <Rotate>
          <Form.Button color={color5} >{this.props.id ? 'Edit' : 'Add'}</Form.Button>
          </Rotate>
          </Flex>
      </Form>
    )
  }
}
export default SongForm