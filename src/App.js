import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      news : [],
      wtv: "fuckThis"
    };
  }

  componentDidMount() {
    this.getNews()
  }

  getNews = () => {
    var url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=d73e128c49f243bb95b26e9a8dcd496b";
    //   var req = new Request(url);
    //   fetch(url).then(function(response) {
    //     console.log(response.json());
    //   });
    // };
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({news : res.articles}) 
      })
      .catch()

    return "wtf"
  };

  render() {
    return (
      <div>
        {this.state.wtv}
        {/* {this.state.news.articles[0].title}
        <br />
        {this.state.news.articles[0].description}
        <br />
        {this.state.news.articles[0].pubDate}
        <img src={this.state.news.articles[0].urlToImg} /> */}
        Hello World
      </div>
    );
  }
}

export default App;
