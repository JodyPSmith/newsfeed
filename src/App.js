import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
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

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({ news: res.articles })
        console.log(this.state.news)
      })
      .catch()
  };

  randomNum = () => {
    return Math.floor(Math.random() * (1 - 20) + 20)
  }
  render() {
    let newsArray = this.state.news.map(function (article, index, key) {
      return (
        <div className="newsdiv">
          <div key={key} className="container">
            <img src={article.urlToImage} alt="article" />
          </div>

          <div className="textbar">
            <a >{article.title}<br /></a>
            <a >{article.author}<br /></a>
            <a >{article.description}<br /></a>
          </div>
        </div>
      )
    })
    return (
      <div className="newsdiv">
        {newsArray[this.randomNum()]}
      </div>
    );
  }
}

export default App;
