/* eslint-disable no-useless-constructor */
import React from 'react'
import FileInputForm from './FileInputForm'

export default function FileSelectionScreen(props) {
    /**
     * * The Component renders a screen which let's a user to select a file
     * * It expects a navigator function as as prop 
     */


    return <div className="row  text-white align-items-center justify-content-center">
        <div className="main-content card p-sm-5 p-4">
            <h1 className="text-center ">
                <span className="text-danger">{"<"}</span>
                <span className="text-success">CSV</span>
                <span className="text-dark">Reader</span>
                <span className="text-danger">{"/>"}</span>
                <div className="h3 p-0 text-sm-right text-dark"> by <a href="https://linkedin.com/atifmehmood53">Atif Mehmood</a></div>
            </h1>
            <hr className="bg-white" />
            <FileInputForm navigator={props.navigator} />
        </div>
    </div>

}