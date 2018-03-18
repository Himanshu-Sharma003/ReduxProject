import VideoListItem from "./video_list_item";
import React from "react";

const VideoList = (props) => {
  const videoItems = props.videos.map(value => {
    return <VideoListItem onVideoSelect={props.onVideoSelect} key={value.etag} video={value} />;
  });
  console.log("Video_List :", videoItems);
  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
