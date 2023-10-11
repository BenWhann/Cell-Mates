import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Userprofile from './pages/Userprofile'
import MeetMates from './pages/Meetmates'
import MatchedList from './pages/Matchedlist'
import Commissary from './pages/Commissary'

const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        error: <NoMatch />,
        children: [
          {
            index: true, 
            element: <Home />
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