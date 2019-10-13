/* eslint-disable no-useless-constructor */


import React from 'react'
import { fileReader } from '../utils'

export default class FileInputForm extends React.Component {
    /** 
     * * The Component renders a File Input Field 
     */
    constructor(props) {
        super(props)
    }

    // handels file input 
    eventHandler(e) {
        /**
         * * Gets File Object and passes to the fileReader funtion defined in utils.js  
         */
        let file = e.target.files[0]
        if (file) {
            fileReader(file, (rows) => { this.props.navigator("FileDiplayScreen", rows) })
        }
    }

    render() {
        return <div className="form-group text-dark">
            <label htmlFor="fileInput" >Please Select a file</label>
            <input type="file" className="form-control-file" accept=".csv" onChange={this.eventHandler.bind(this)} id="fileInput" />
        </div>
    }
}