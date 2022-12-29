import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Button from "bootstrap/js/src/button";
import Contact from "./Contact";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Layout/>}></Route>
        <Route path={"c"} element={<Contact />} />
      </Routes>

      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*  <Link to={"/c"}>Linker</Link>*/}
      {/*</header>*/}
    </div>
  );
}



export default App;
