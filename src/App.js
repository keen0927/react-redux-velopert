import React, { Component } from 'react';
import CounterContainer from './containers/CounterContainer';
// import Counter from './components/Counter';

class App extends Component {
    render() {
        return (
            <div>
                <CounterContainer />
            </div>
        );
    }
}

export default App;