import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import Root from './pages/Root';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Videos /> },
      {
        path: '/videos',
        element: <Videos />,
      },
      {
        path: '/videos/:videoId',
        element: <Videos />,
      },
      {
        path: '/videos/watch/:videoId',
        element: <VideoDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
