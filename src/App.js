import React, { Component } from "react";
import "./App.css";
import NewsTop from './components/newstop'
import NewsSearch from './components/newssearch'
import NewsSource from './components/newssource'


class App extends Component {
  constructor() {
    super();
    this.state = {
      feed : "news",
      bso : { }
    }
  }

  componentDidMount() {
    let settings = window.BroadSignObject
    this.setState({ bso : settings})
  }
  
  render() {
    if (this.state.feed === "weather") {
      return (<div>Hello Weather</div>)
    } else {
      return(<NewsSearch />)
    }
  }
}
export default App;
