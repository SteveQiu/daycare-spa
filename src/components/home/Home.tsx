import { Link } from "react-router-dom";
import logo from 'assets/svg/logo.svg';
import 'assets/style/App.scss';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          className="App-link"
          to="/about"
          rel="noopener noreferrer"
        >
          About
        </Link>
      </header>
    </div>
  );
}

export default Home;
