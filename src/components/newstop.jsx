import React, { Component } from "react";
import { newsapikey } from "./apikey";



class NewsTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      country: this.props.country,
      logo: this.props.logo,
      category: this.props.category,
      url : ""
    };
  }

  componentDidMount() {

    var url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=" +
      this.state.country +
      "&category=" +
      this.state.category +
      "&apiKey=" +
      newsapikey;
    this.setState({url :url})
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({ news: res.articles });
      })
      .catch();


  }

  showNews = () => {
    let newsArray = this.state.news.map(function(article, index, key) {
      return (
        <div className="newsdiv">
          <div key={key} className="container">
            <img src={article.urlToImage} alt="article" />
          </div>

          <div className="textbar">
            <h1>
              {article.title}
              <br />
            </h1>
            <h3>{article.author} </h3>
            <h2>
              {article.description}
              <br />
            </h2>
          </div>
        </div>
      );
    });

    return newsArray[this.randomNum()];
  };

  randomNum = () => {
    return Math.floor(Math.random() * (1 - 20) + 20);
  };

  render() {
    return (
      <div className="newsdiv">
        {this.showNews()}
        {this.state.logo} <br /> {this.state.url} <br/> {this.state.country} <br />{" "}
        {this.state.category}
        <img className="logo" alt="logo" src={this.state.logo} />
        
      </div>
    );
  }
}

export default NewsTop;
