
import React from 'react'
import Cell from './Cell'

export default function Row(props) {
    /**
     * * The Component renders a row of the table displaying contents of a file 
     * * It expects 'values:list' as a prop which represents contents of each cell in this row 
     */

    return <tr>
        {props.values.map((value, index) => <Cell key={index} value={value} />)}
    </tr>

}