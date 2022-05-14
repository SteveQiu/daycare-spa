import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
const Home = lazy(() => import('components/home/Home'));
const About = lazy(() => import('components/about/About'));


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
