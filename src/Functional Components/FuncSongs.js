import React from 'react'
import { Table } from 'semantic-ui-react'
import FuncSong from './FuncSong'

const FuncSongs = (props) => {
  const {funcSongs, deleteSong} = props

  return(
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Song Name</Table.HeaderCell>
            <Table.HeaderCell>Artist</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {funcSongs.map (songs => <FuncSong key={songs.id} {...songs} deleteSong={deleteSong}/>)}  
        </Table.Body>
      </Table>
  )
}
export default FuncSongs