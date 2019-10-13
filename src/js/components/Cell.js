

import React from 'react'

export default function Cell(props) {
    /**
     * * The Component Renders a single cell of a table
     * * Expects 'value:any type' as a props, which will be rendered in this cell   
     */

    return <th className="cell">{props.value}</th>
    
}