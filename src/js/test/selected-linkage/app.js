import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import react from 'react';


import '../css/index.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ul: null
        };
    }

    getTableList(list) {
        //let li = null;
        // list.map(function(da,i){
        //  li += <li>{da.upLiveCode}</li>
        // });
        let ul = <div>
            <ul>
                {
                    list.map(function(da, i) {
                        return (<li key={i}>{da.upLiveCode}</li>)
                    })
                }
            </ul>
        </div>
        return ul;
    }

    getAjax() {
        let self = this;
        $.ajax({
            url: 'http://www.mocky.io/v2/58c77ec92700002c022bb00b',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                param1: 'value1'
            }
        })
        .done(function(json) {
            if (json.code = "SC_SUCCESS") {
                let ul = self.getTableList(json.data.hostList);
                self.setState({
                    ul: ul
                })
            // $("#root").find('node-id=table'])
            }
            console.log("success");
        })
    }

    componentDidMount() {
        this.getAjax();
    }

    render() {
        let ht = <div className="main">
                    <h2>表格数据列表</h2>
                    <div >{this.state.ul}</div>
                    <div>{this.state}</div>
        </div>
        return (ht);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
