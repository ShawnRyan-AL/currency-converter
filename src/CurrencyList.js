import React, {Component} from 'react';
import './App.css';

class CurrencyList extends Component {

    render() {
        return (
            <div>
                <input className='currency-list' type='text' onChange={this.update} value={inputText}/>
            </div>
        );
    }
}

export default CurrencyList;