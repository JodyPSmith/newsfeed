import React, { Component } from "react";
import "./App.css";
import NewsTop from './components/newstop'

class App extends Component {
  constructor() {
    super();
    this.state = {
      feed: "",
      logo: "",
      country: "",
      category: "",
    }
  }

  componentDidMount() {
    if (window.BroadSignObject !== undefined) {
      let settings = window.BroadSignObject;
      this.setState({
        logo: decodeURIComponent(decodeURIComponent(settings.logo)),
        country: decodeURIComponent(decodeURIComponent(settings.country)),
        category: decodeURIComponent(decodeURIComponent(settings.category)),
        feed : decodeURIComponent(decodeURIComponent(settings.feed))
      });
    } else {
      this.setState({
        logo: "http://2018programmatic.ministryofnewmedia.com/wp-content/uploads/2018/03/Broadsign-Logo.png",
        country: "gb",
        category: "",
        feed : "news"
      })
    }
  }
  
  render() {
    if(this.state.feed !== "") {
    if (this.state.feed === "weather") {
      return (<div>Hello Weather</div>)
    } else {
      return(<div>
      <NewsTop country={this.state.country} logo={this.state.logo} category={this.state.category} />
      </div>
   )
    }
  } else {
    return (<div>loading</div>)
  }
  }
}
export default App;
