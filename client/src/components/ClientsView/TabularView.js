import React from 'react'
import ReactTable from 'react-table'
import { Table,Block } from "reakit";

import 'react-table/react-table.css'

export default (props)=>(
    <Block margin="10px 0">
        <Table 
        use={ReactTable}
        data={props.data}
        columns={props.columnLayout}
        defaultPageSize={10}
        flexGrow={1}
        />
    </Block>
)