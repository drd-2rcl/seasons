import React, { Component } from 'react';
import SeasonDisplay  from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errorMessage: '' };
    // }

    state = { lat: null, errorMessage: '' }; 
    
    componentDidMount() {
        //Getting the Current Position
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // called setState
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    componentDidUpdate() { 
        console.log('My component was just updated - it rerendered!');
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return <Spinner />;
    }
}

export default App;
