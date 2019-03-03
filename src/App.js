import React, { Component } from 'react';
import Counter from './components/Counter';
class App extends Component {
    render() {
        return (
            <div>
                Counter
                <Counter number="11" />
            </div>
        );
    }
}

export default App;