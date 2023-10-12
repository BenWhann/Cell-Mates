import ReactDOM from 'react-dom/client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import $ from 'jquery';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './app.jsx';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Userprofile from './pages/Userprofile';
import MeetMates from './pages/Meetmates';
import MatchedList from './pages/Matchedlist';
import Commissary from './pages/Commissary';
import Error from './pages/Error';

const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        error: <Error />,
        children: [
          {
            index: true, 
            element: <Home />,
          },
          {
            path: '/signup',
            element: <Signup />,
          },
          {
            path: '/userprofile',
            element: <Userprofile/>,
          },
          {
            path: '/meetmates',
            element: <MeetMates/>,
          },
          {
            path: '/matchedlist',
            element: <MatchedList/>,
          },
          {
            path: '/commissary',
            element: <Commissary/>,
          },
        ] 
    }

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )