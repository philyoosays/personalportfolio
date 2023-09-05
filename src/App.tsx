import React, {
  // useEffect,
  // useState
} from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { Header, Nav } from './components';
import {
  AboutMe,
  // Contact,
} from './pages';
import Planner from './routes/Planner';
// import analytics from './utils/analytics';
import {
  ProtectedRoute,
  // TopMenu
} from './components';
// import { Dates, Login } from './pages/planner'
import './App.scss';

export namespace Type {
  export interface Props {

  }
}

const NAV_LINKS = [
  {
    text: 'About Me',
    path: '/about'
  },
  // {
  //   text: 'Contact',
  //   path: '/contact',
  // }
];

const SHOW_FOR = ['/', '/about', '/contact']

const Main = (props: Type.Props) => {
  const location = useLocation();
  if (!SHOW_FOR.includes(location.pathname)) return <></>
  else return (
    <React.Fragment>
      <Header />
      <Nav links={NAV_LINKS} />
    </React.Fragment>
  )
}

const App = (props: Type.Props) => {
  // const [isLoaded, setIsLoaded] = useState(false);
  // const location = useLocation();

  // if (location.pathname === '/') return redirect('/about')
  // useEffect(() => {
  //   analytics.pageView(location)
  // }, [location]);
  return (
    <div className="App">
      <Main />
      <Routes>
        <Route path="/planner" element={<Planner />}>
          {/* <Route path="dates" element={<ProtectedRoute view={<Dates items={[]} />} />} /> */}
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="places" element={<ProtectedRoute view={<div />} />} />
          <Route path="picks" element={<ProtectedRoute view={<div />} />} />
        </Route>
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/about" element={<AboutMe />} />
        <Route path="/" element={<Navigate to="/about" />} />
        {/* <Route path="/" element={<div style={{ height: '500px', width: '100%' }} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
