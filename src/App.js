import React, { Component } from 'react';
import './App.css';
import Chat from './Chat';
import Logo from './pogp.png'
import Pizza from './Pizza';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Pils og Programmering</h1>
                <Pizza/>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
                <img src={Logo} width={300} alt="Beer and pizza. Lookin' tasty!"/>
                <Chat/>
            </div>
        );
    }
}

export default App;
