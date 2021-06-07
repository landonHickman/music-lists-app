import React from 'react'
import { Button, Table } from 'semantic-ui-react'
import SongForm from './SongForm'

export default class Song extends React.Component {
  render(){
    return (
      <Table.Row>
      <Table.Cell>{this.props.id}</Table.Cell>
      <Table.Cell>{this.props.name}</Table.Cell>
      <Table.Cell>{this.props.artist}</Table.Cell>
      <Table.Cell><SongForm id={this.props.id} editSong={this.props.editSong} {...this.props}/></Table.Cell> 
      <Table.Cell>
        <Button onClick={()=>this.props.deleteSong(this.props.id)} color='red'>
          Delete: {this.props.id}
        </Button>
      </Table.Cell>
    </Table.Row>
    )
  }
}
