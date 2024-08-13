import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

export default function RelatedVideos({ channelTitle }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery({
    queryKey: ['videos', channelTitle],
    queryFn: () => youtube.relatedVideos(),
    staleTime: 1000 * 60 * 5,
  });

  console.log(channelTitle);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Someting is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </div>
  );
}
