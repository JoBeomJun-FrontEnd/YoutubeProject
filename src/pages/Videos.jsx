import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: async () => {
      return fetch(`/data/${keyword ? `${keyword}` : 'hotTrand'}.json`)
        .then((res) => res.json())
        .then((data) => data.items);
    },
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Someting is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
