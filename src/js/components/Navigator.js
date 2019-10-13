import React from 'react'
import FileSelectionScreen from './FileSelectionScreen'
import FileDisplayScreen from './FileDisplayScreen'

export default class Navigator extends React.Component {
    /**
     * * The Component serves as Switch Navigator
     */

    constructor(props) {
        super(props)
        this.state = {
            currentScreen: 'FileSelectionScreen',
            screenProps: null // this will be set by child screen components to interchange data between them 
        }
    }

    navigator(screenName, screenProps) {
        this.setState({ currentScreen: screenName, screenProps })
    }

    render() {
        return this.state.currentScreen === 'FileSelectionScreen' ?
            <FileSelectionScreen
                navigator={this.navigator.bind(this)}
            /> :
            <FileDisplayScreen
                navigator={this.navigator.bind(this)}
                screenProps={this.state.screenProps}
            />
    }
}