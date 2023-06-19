import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/main';
import Podcast from  './pages/podcast'
import Episode from './pages/episode';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "podcast/:podcastId",
    element: <Podcast />,
  },
  {
    path: "podcast/:podcastId/episode/:episodeId",
    element: <Episode />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
