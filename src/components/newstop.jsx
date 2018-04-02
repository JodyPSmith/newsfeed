import React, { Component } from 'react';
import {newsapikey} from './apikey'

class NewsTop extends Component {
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
            "country=us&apiKey=" + newsapikey;

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
                        <h1>{article.title}<br /></h1>
                        <h3 >{article.author}</h3>
                        <h2 >{article.description}<br /></h2>
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

export default NewsTop;