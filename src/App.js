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

  //function to generate a random color from R: 0-154. G: 0-154, B: 0-154
  getRandomColor(upperBound) {
    const color = `rgb(
      ${Math.floor(Math.random() * upperBound)},
      ${Math.floor(Math.random() * upperBound)},
      ${Math.floor(Math.random() * upperBound)}
      )`; 
      console.log(color);
      
      return color;
  }

  render() {
    return (
      <div>
        <QuoteBox
          color={this.getRandomColor(155)}
          quote={this.state.quote}
          author={this.state.author}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
