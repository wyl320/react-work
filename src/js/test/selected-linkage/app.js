import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import react from 'react';


// import '../../../css/index.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ul: null
        };
    }

    render() {
        let ht = <div className="main">
                    <h2>selected-linkage</h2> 
        </div>
        return (ht);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
