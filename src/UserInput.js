import React, {Component} from 'react';

class UserInput extends Component {
    state = {
        inputText: '',
    }
    
    update = (event) => {
        this.setState({inputText: event.target.value});
    }

    OnAddButtonClick = () => {
        const { inputText } = this.state;
        this.props.OnAddButtonClick(inputText);
        this.setState({inputText: ''})
    }
    
    render() {
        const { inputText } = this.state;
        console.log(this.props)
        console.log('event: ', inputText);
        return (
            <div>
                <input className='user-input' type='text' onChange={this.update} value={inputText}/>
            </div>
        );
    }
}

export default UserInput;