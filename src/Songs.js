import React from 'react'
import { Table} from 'semantic-ui-react'
import Song from './Song'

class Songs extends React.Component {
  render(){
    return (
      <Table>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Song Name</Table.HeaderCell>
            <Table.HeaderCell>Artist</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
          {this.props.songs.map(s => <Song  deleteSong={this.props.deleteSong} editSong={this.props.editSong} key={s.id} {...s}/>)}
        </Table.Header>
      </Table>
    )
  }
}



export default Songs