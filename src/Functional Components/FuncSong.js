import React from 'react'
import { Button, Table } from 'semantic-ui-react'

const FuncSong = (props) => {
  const {name, artist, id, deleteSong} = props
  return(

      <Table.Row>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{artist}</Table.Cell>
      <Table.Cell></Table.Cell> 
      <Table.Cell>
        <Button color='red' onClick={()=>deleteSong(id)}>
          Delete: {id}
        </Button>
      </Table.Cell>
    </Table.Row>
  )
}
export default FuncSong