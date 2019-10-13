
import React from 'react'
import Row from './Row'

export default function Table(props) {
    /** 
     * * The component renders a table representing CSV file's components 
    */

    return <div className="table-responsive">
        <table className="table table-bordered ">
            <tbody>
                {props.rows.map((row, index) => <Row key={index} values={row} />)}
            </tbody>
        </table>
    </div>

}