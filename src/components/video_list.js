//does it need state?
//constructor says no, so ok , going w/ functional component

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videos = props.videos.map((video) => {
         return <VideoListItem
            key={video.etag}
            video={video}
            onVideoSelect={props.onVideoSelect}/> 
        });

    return (
        <ul className="col-md-4">
        {videos}
        </ul>
    );
}

export default VideoList;