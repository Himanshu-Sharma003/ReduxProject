import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetails from "./components/video_details"

const API_KEY = "AIzaSyABW48UetMSSlWuAv2t5nSQO-1BFRvBCKw";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] , selectedVideo: null, term :''};
    this.videoSearch("cartoon")
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
           "videos": videos,
           "selectedVideo": videos[0] });
     // console.log("this.state.videos", this.state.videos);
    });
  }
  render() {
    return (
      <div>
        <SearchBar onSearch={term => {this.videoSearch(term)}}/>
        <VideoDetails video={this.state.selectedVideo} />
        {console.log("this.state.videos", this.state.videos)}
        <VideoList onVideoSelect ={(selectedVideo) =>{this.setState({"selectedVideo":selectedVideo})}} videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
