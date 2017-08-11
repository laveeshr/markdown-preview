import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

var marked = require('marked');

class App extends Component {
    constructor(){
        super();
        this.handleOnChangeText = this.handleOnChangeText.bind(this);
        this.state = {
            text: '# Markdown Preview' +
            '\n Enter markdown on the left and see the changes on the right'
        }
    }

    handleOnChangeText(e){
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return (
            <div className="App">
                <div className="left">
                    <Text text={this.state.text} onChangeText={this.handleOnChangeText}/>
                </div>
                <div className="right">
                    <Preview text={this.state.text}/>
                </div>
            </div>
        );
    }
}

function Text(props) {
    let html = props.text;
    let callBack = props.onChangeText;
    return <div>
        <textarea rows="50" className="text" value={html} onChange={callBack}></textarea>
    </div>
}

function Preview(props) {
    let html = marked(props.text);
    return <div className="preview" dangerouslySetInnerHTML={{__html : html}}></div>
}

export default App;
