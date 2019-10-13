
import React from 'react'
import Table from './Table'

export default function FileDisplayScreen(props) {
    /**
     * * The Componnet represents a screen which will be rendered after file has been read 
     * * It expects a navigator function as a prop and rows of which will be rendered in the child table 
     */
    return <div>
        <div className="display-4 px-4 py-5 text-white">
            Contents of the file are shown bellow
                <hr />
            <button className="btn py-3 btn-white my-4 py-2" onClick={() => props.navigator('FileSelectionScreen')}>
                Select a New File
            </button>
        </div>

        <div className="bg-white m-0">
            <Table rows={props.screenProps} />
        </div>

    </div>

}