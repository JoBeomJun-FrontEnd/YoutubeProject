import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
  const { videoId } = useParams();
  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
      />
      <span></span>
    </div>
  );
}
