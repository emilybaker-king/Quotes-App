import React, { Component } from 'react';
import './App.css';
import QuoteBox from './QuoteBox';
import quotes from './quotes';

class App extends Component {
  //Setting the constructor function so we can set our default state
  constructor(props) {
    super(props);
    //set the first quote and author as our default state
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
    }
  }

  //create a function called fetRandmQuote that returns a random quote rom the array of quotes. Hint: You'll need to generate a random number between 0 and 1 less than the length of the array
  getRandomQuote() {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuoteIndex];
  }

  //function that will be called when the new quote button on the quote box function is pressed
  handleClick = () => {
    //generate a random quote
    const randomQuote = this.r=this.getRandomQuote();
    //update our state with the information from the random quote
    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author
    });
  }

  render() {
    return (
      <div>
        <QuoteBox
          quote={this.state.quote}
          author={this.state.author}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
