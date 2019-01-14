import React, { Component } from 'react';
import { palindromeChecker } from './utility';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            isPalindrome: false
        };
    }

    // Handler
    onInputChangeHandler(event) {
        const inputValue = event.target.value;
        this.setState({
            inputValue,
            isPalindrome: palindromeChecker(inputValue)
        });
    }

    // Render
    render() {
        const { inputValue, isPalindrome } = this.state;

        const resultDescription = `is ${isPalindrome ? '' : 'not'} a palindrome!`

        return (
            <div className="main">
                <header className="header || constrain-width">
                    <h1>A palindrome checker</h1>
                    <p>A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar or the number 10801. Sentence-length palindromes may be written when allowances are made for adjustments to capital letters, punctuation, and word dividers, such as "A man, a plan, a canal, Panama!", "Was it a car or a cat I saw?" or "No 'x' in Nixon". <a href="https://en.wikipedia.org/wiki/Palindrome">(Wikipedia)</a>
                    </p>     
                </header>
                <div className="palindrome-form || constrain-width">
                    <label
                        className="palindrome-form-label"
                        htmlFor="word">
                        Try it out!
         			</label>
                    <input
                        className="palindrome-form-input"
                        type="text"
                        onChange={this.onInputChangeHandler.bind(this)}
                        name="word"
                    />
                    {inputValue && 
                        <span className="palindrome-form-result"><strong>{inputValue} </strong>{resultDescription}</span>
                    }   
                </div>
            </div>
        );
    }
}

export default App;
